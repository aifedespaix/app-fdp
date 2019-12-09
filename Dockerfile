FROM node:latest

WORKDIR app
COPY . .

RUN yarn install --production
RUN yarn build:ssr

EXPOSE 4000

ENTRYPOINT yarn serve:ssr
