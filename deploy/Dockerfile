# Multi-stage Dockerfile to build all three websites and combine them into an Nginx container

# 1. Build main softprobe.ai
FROM node:20-alpine AS build-main
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install
COPY . .
# Remove the cloned sub-repos from the build context so they don't interfere
RUN rm -rf deploy/context-site deploy/sre-site
RUN npm run build

# 2. Build context.softprobe.ai
FROM node:20-alpine AS build-context
WORKDIR /app
COPY deploy/context-site/package*.json ./
RUN npm ci || npm install
COPY deploy/context-site .
RUN npm run build

# 3. Build sre.softprobe.ai
FROM node:20-alpine AS build-sre
WORKDIR /app
COPY deploy/sre-site/package*.json ./
RUN npm ci || npm install
COPY deploy/sre-site .
RUN npm run build

# 4. Final Nginx Server
FROM nginx:alpine

# Copy Nginx config first
COPY deploy/nginx.conf /etc/nginx/nginx.conf

# Copy all the static built assets
COPY --from=build-main /app/dist /var/www/main
COPY --from=build-context /app/dist /var/www/context
COPY --from=build-sre /app/dist /var/www/sre

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
