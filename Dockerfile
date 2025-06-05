# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./

# Add Prisma files
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the app
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port
EXPOSE 3001

# Start the app
CMD ["npm", "run", "start:prod"]
