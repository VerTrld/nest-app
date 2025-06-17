# Use lightweight Node.js 20 base image for build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install all dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Push Prisma schema to database (sync schema)
# Note: For this to work during build, your database must be accessible from build context!
RUN npx prisma db push

# Build NestJS app (output to dist/)
RUN npm run build

# Production image (Node 20 Alpine)
FROM node:20-alpine

WORKDIR /app

# Copy production dependencies only
COPY package*.json ./
RUN npm install --only=production

# Copy built app and prisma files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma

EXPOSE 3001

CMD ["node", "dist/main.js"]
