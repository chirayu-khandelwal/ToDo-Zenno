# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with clean npm cache
RUN npm ci && \
    npm cache clean --force

# Copy source code
COPY . .

# Production stage
FROM node:18-alpine

# Add non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S -D -H -u 1001 -h /usr/src/app -s /sbin/nologin -G nodejs -g nodejs nodejs && \
    chown -R nodejs:nodejs /usr/src/app

WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# Copy built assets from builder stage
COPY --from=builder /app/src ./src
COPY --from=builder /app/models ./models
COPY --from=builder /app/routes ./routes
COPY --from=builder /app/server.js ./

# Set proper permissions
RUN chown -R nodejs:nodejs /usr/src/app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --spider http://localhost:5000/api/health || exit 1

# Start the application
CMD ["node", "server.js"] 