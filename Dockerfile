FROM node:latest

ARG PORT
ARG ENV

EXPOSE $PORT

RUN echo $PORT
WORKDIR /home/node
COPY . .

RUN yarn
RUN yarn build:$ENV

ENTRYPOINT yarn serve:ssr
