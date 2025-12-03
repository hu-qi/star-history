FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

# Build Backend
FROM base AS backend-builder
WORKDIR /app/backend
COPY backend/package.json backend/pnpm-lock.yaml ./
RUN pnpm config set registry https://registry.npmmirror.com && pnpm install --frozen-lockfile
COPY backend/ .
# backend/tsconfig.json has "rootDir": "../", so we need to be careful.
# However, since we are in /app/backend, and /app is the parent, it should work if we copy backend to /app/backend.
# But wait, if rootDir is "../", tsc expects source files to be under "../".
# Our source files are in /app/backend (which is under /app).
# So it should be fine.
RUN pnpm build

# Build Frontend
FROM base AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package.json frontend/pnpm-lock.yaml ./
RUN pnpm config set registry https://registry.npmmirror.com && pnpm install --frozen-lockfile
COPY frontend/ .
ENV NODE_ENV=production
# Add build-time environment variable
ARG NEXT_PUBLIC_GITCODE_ACCESS_TOKEN
ENV NEXT_PUBLIC_GITCODE_ACCESS_TOKEN=$NEXT_PUBLIC_GITCODE_ACCESS_TOKEN
# Ensure next build works
RUN pnpm build

# Runner
FROM base AS runner
WORKDIR /app

# Copy backend artifacts
# We copy the whole backend directory structure that is needed
# dist contains the compiled code
COPY --from=backend-builder /app/backend/dist ./backend/dist
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules
COPY --from=backend-builder /app/backend/package.json ./backend/package.json
# Copy shared folder if it exists and is needed at runtime?
# The compiled code in dist/shared should be enough if it was compiled.
# If tsc compiled shared files into dist/shared, then we don't need source shared files.

# Copy frontend artifacts
COPY --from=frontend-builder /app/frontend/.next ./frontend/.next
COPY --from=frontend-builder /app/frontend/public ./frontend/public
COPY --from=frontend-builder /app/frontend/node_modules ./frontend/node_modules
COPY --from=frontend-builder /app/frontend/package.json ./frontend/package.json
COPY --from=frontend-builder /app/frontend/server.js ./frontend/server.js

# Copy entrypoint
COPY docker-entrypoint.sh .
RUN chmod +x docker-entrypoint.sh

# Expose ports
EXPOSE 3000 8080

CMD ["./docker-entrypoint.sh"]
