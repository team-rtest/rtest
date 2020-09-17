FROM node:lts-alpine AS build

WORKDIR /server

COPY . .
RUN yarn && yarn build

FROM node:lts-alpine

WORKDIR /server

# USER node
EXPOSE 4000

ENV NODE_ENV=production
COPY --from=build /server/build .
RUN yarn --production

CMD [ "node", "-r", "dotenv/config",  "server.js"]