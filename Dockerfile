FROM node:lts-buster

USER root

RUN apt-get update && apt-get upgrade -y
# RUN apt-get -y install ffmpeg imagemagick webp
RUN rm -rf /var/lib/apt/lists/*

COPY . /YanGG
# COPY .env.example /allen/.env
COPY config.json.example /YanGG/config.json

WORKDIR /YanGG

RUN npm install
RUN npm install ts-node --location=global

EXPOSE 5000

CMD ["npm", "run", "server"]
