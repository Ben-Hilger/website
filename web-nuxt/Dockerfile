FROM node:20-alpine

RUN apk upgrade

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT [ "node", ".output/server/index.mjs" ]