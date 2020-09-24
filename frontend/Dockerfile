FROM node:lts-alpine

ARG REACT_APP_API
ENV REACT_APP_API=${REACT_APP_API}
WORKDIR /client

COPY . .

RUN yarn
RUN yarn build
RUN yarn global add serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]