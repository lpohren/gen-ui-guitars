# Use Node.js LTS version
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run the server
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies including dev dependencies
# vite preview needs dev dependencies to read vite.config.ts
RUN npm ci

# Copy built application
COPY --from=builder /app/.output ./.output

# Copy minimal config files needed for vite preview
COPY --from=builder /app/vite.config.ts ./vite.config.ts

# Expose port (Railway will set PORT env var)
EXPOSE 3000

# Use vite preview for production server
# TanStack Start uses vite preview to serve the built application
# PORT env var will be set by Railway
CMD ["npx", "vite", "preview", "--host", "0.0.0.0"]

