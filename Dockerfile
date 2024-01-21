# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Next.js"

# Next.js app lives here
WORKDIR /app

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# RUN python -m pip install awscli

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENV NEXT_TELEMETRY_DISABLED=1
ENV NPM_CONFIG_UPDATE_NOTIFIER=false

# Install node modules
COPY --link package-lock.json package.json ./
RUN npm ci --no-fund --no-audit

# Copy application code
COPY --link . .

ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENV NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED=1

# Build application
RUN npm run build


# Final stage for app image
FROM base

# # Copy built application
# COPY --from=build /app /app

RUN mkdir .next
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/static ./.next/static

# ARG AWS_ACCESS_KEY_ID
# ENV AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
# ARG AWS_SECRET_ACCESS_KEY
# ENV AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY

# RUN aws s3 sync /app/public/ s3://static.local-medical-supplies
# RUN aws s3 sync /app/.next/static s3://static.local-medical-supplies/.next/static


ARG SENTRY_AUTH_TOKEN
ENV SENTRY_AUTH_TOKEN=$SENTRY_AUTH_TOKEN
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV="production"
ENV PORT=3000
ENV HOSTNAME "0.0.0.0"

EXPOSE 3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["node", "server.js"]
