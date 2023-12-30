# syntax = docker/dockerfile:1
FROM endeveit/docker-jq AS deps

# https://stackoverflow.com/a/58487433
# To prevent cache invalidation from changes in fields other than dependencies

COPY package.json package-lock.json /tmp

RUN jq 'del(.version)' < /tmp/package.json > /tmp/package-stable.json
RUN jq 'del(.version)' < /tmp/package-lock.json > /tmp/package-lock-stable.json


# Adjust NODE_VERSION as desired
FROM node:20-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app


# Throw-away build stage to reduce size of final image
FROM base as build

ENV NEXT_TELEMETRY_DISABLED 1

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY --from=deps /tmp/package-stable.json ./package.json
COPY --from=deps /tmp/package-lock-stable.json ./package-lock.json
RUN npm ci --no-fund --no-audit

# Copy application code
COPY --link . .

# Set production environment
ENV NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED 1

# Build application
RUN npm run build


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "npm", "run", "start" ]
