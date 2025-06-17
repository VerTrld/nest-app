# Use lightweight Node.js base image
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Generate Prisma client (important before build)
RUN npx prisma generate

# Build the NestJS app (output to dist/)
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy production dependencies only
COPY package*.json ./
RUN npm install --only=production

# Copy built app and prisma client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 3001

CMD ["node", "dist/main.js"]
