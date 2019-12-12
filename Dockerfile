FROM node:12.13.1

WORKDIR app
COPY . .

RUN yarn install

RUN yarn build:ssr

EXPOSE 4000

ENTRYPOINT yarn serve:ssr
