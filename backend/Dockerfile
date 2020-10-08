# FROM node:lts-alpine AS build

# WORKDIR /server

# COPY . .
# RUN yarn && yarn build

FROM node:14-alpine

RUN apk add curl

WORKDIR /server

# USER node
EXPOSE 4000

ENV NODE_ENV=production
COPY . .
RUN yarn --production

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:4000/status || exit 1

CMD [ "node", "-r", "dotenv/config",  "src/server.js"]