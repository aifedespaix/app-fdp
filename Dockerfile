FROM node:latest

WORKDIR app
COPY . .

RUN yarn
RUN yarn build:ssr

RUN echo ${APP_PORT}
EXPOSE ${APP_PORT}

ENTRYPOINT yarn serve:ssr
