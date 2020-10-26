FROM node:12

WORKDIR /application

RUN npm install pm2 -g
RUN npm install -g express-generator

CMD ["pm2-dev", "config.json"]

