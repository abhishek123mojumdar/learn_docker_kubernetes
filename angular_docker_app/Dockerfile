FROM node:20

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]