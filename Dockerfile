FROM node:latest

WORKDIR app
COPY . .

RUN yarn
RUN yarn build:ssr

EXPOSE ${APP_PORT}

ENTRYPOINT yarn serve:ssr
