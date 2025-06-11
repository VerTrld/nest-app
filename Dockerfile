# Use official lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (for better Docker caching)
COPY package*.json ./

# Install dependencies (includes @prisma/client)
RUN npm install

# Copy the entire application code (includes prisma/)
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the NestJS app (compiles TypeScript to dist/)
RUN npm run build

# Expose port NestJS will run on
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start:prod"]
