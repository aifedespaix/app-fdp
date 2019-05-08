FROM node:latest

# Prepare
WORKDIR /app
COPY . .
EXPOSE 4000

# Install
RUN npm install
RUN npm install -g @angular/cli@latest
