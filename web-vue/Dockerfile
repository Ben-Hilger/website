# Build env
FROM node:lts-alpine as build-npm-stage

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY index.html ./
COPY public ./public
COPY src ./src
COPY tsconfig*.json ./
COPY vite.config.ts ./

RUN npm run build

# Run env
FROM nginx:stable-alpine
COPY --from=build-npm-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]