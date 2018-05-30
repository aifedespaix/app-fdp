# docker build .
# The official nodejs docker image
#FROM node:slim
FROM node:latest

WORKDIR /app
COPY ./ /app/

RUN set -ex \
    && apt-get update \
    && apt-get install apt-transport-https ca-certificates -y \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install yarn -y

#RUN yarn global add node-gyp
RUN yarn
RUN yarn build --prod --build-optimizer
RUN mkdir /usr/share/nginx/html -p
RUN ls /usr/share/nginx/html -la
RUN yes | cp -rf dist/* /usr/share/nginx/html
RUN ls /usr/share/nginx/html -la

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13

#COPY --from=node /app/dist/ /usr/share/nginx/html # todo : repare psk faut buidl dans lcontainer mdr
#COPY dist/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
