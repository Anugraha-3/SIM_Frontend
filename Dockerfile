# Stage 1: Use a Node.js image to build the frontend assets
FROM node:20 as build-stage

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and build the application
COPY . .
RUN npm run build

# Stage 2: Use nginx to serve the built files
FROM nginx:stable-alpine

# Copy the built files from the build stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]