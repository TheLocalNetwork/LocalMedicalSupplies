# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
RUN echo ${SENTRY_AUTH_TOKEN}



# Throw-away build stage to reduce size of final image
FROM base as build

ENV NEXT_TELEMETRY_DISABLED 1

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
RUN echo ${SENTRY_AUTH_TOKEN}

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --no-fund --no-audit

# Copy application code
COPY --link . .

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
RUN echo ${SENTRY_AUTH_TOKEN}

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
