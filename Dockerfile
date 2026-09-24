# syntax=docker/dockerfile:1

ARG NODE_VERSION=22-alpine

# =========================================================
# Stage 1: Base image with pnpm configured
# =========================================================
FROM node:${NODE_VERSION} AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app

# Install libc6-compat for compatibility with native packages on Alpine
RUN apk add --no-cache libc6-compat \
  && npm install -g pnpm@11.13.1

# =========================================================
# Stage 2: Dependencies installation
# =========================================================
FROM base AS deps
WORKDIR /app

# Copy dependency manifests
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* ./

# Install dependencies using frozen lockfile
RUN pnpm install --frozen-lockfile

# =========================================================
# Stage 3: Development environment (hot reload enabled)
# =========================================================
FROM base AS dev
WORKDIR /app

# Copy installed node_modules from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["pnpm", "dev"]

# =========================================================
# Stage 4: Production Build
# =========================================================
FROM base AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
RUN pnpm build

# =========================================================
# Stage 5: Hardened Minimal Production Runner
# =========================================================
FROM node:${NODE_VERSION} AS production
WORKDIR /app

# Security: Run as non-root user
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

# Nuxt Nitro compiles everything needed into .output
COPY --from=build --chown=appuser:appgroup /app/package.json ./package.json
COPY --from=build --chown=appuser:appgroup /app/.output ./.output

USER appuser

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

# Health check endpoint
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1

CMD ["node", ".output/server/index.mjs"]
