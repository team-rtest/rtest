FROM node:lts-alpine

WORKDIR /client

COPY . .

RUN yarn
RUN yarn build
RUN yarn global add serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]