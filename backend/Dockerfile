FROM node:14-alpine

RUN apk add curl

WORKDIR /server

ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn --production

COPY . .

EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:4000/status || exit 1

CMD [ "node", "-r", "dotenv/config",  "src/server.js"]