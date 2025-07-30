FROM node:18
WORKDIR /app
COPY package.json /app

RUN npm set strict-ssl false
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm","run","start"]
