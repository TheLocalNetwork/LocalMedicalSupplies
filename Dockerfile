FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json*  ./
RUN npm ci --no-fund --no-audit

# Install node modules
COPY --link package-lock.json package.json ./
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
