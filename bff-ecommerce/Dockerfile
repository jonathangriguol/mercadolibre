FROM alpine

WORKDIR /

COPY package*.json ./

RUN apk add --update nodejs npm

RUN node --version

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3001

CMD ["npm", "start"]