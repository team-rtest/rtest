FROM node:lts-alpine AS build

#ARG REACT_APP_API
#ENV REACT_APP_API=${REACT_APP_API}
ENV REACT_APP_API=https://rtest.martyparty.xyz/api
WORKDIR /client

COPY . .

RUN yarn --frozen-lockfile --production
RUN yarn build

FROM node:lts-alpine
WORKDIR /client

ENV NODE_ENV=production
RUN apk add curl

COPY --from=build /client/build ./
RUN yarn global add serve

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:5000/login || exit 1

CMD [ "serve", "-s", "." ]
