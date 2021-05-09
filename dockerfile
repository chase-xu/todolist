FROM node:10

WORKDIR /usr/src/todolist

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]