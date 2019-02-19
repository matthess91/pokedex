FROM node:8.9.4

WORKDIR /usr/src/app
COPY . .

RUN npm install

CMD npm start