FROM node:12.4.0

EXPOSE 3002
WORKDIR /home/product_service

COPY package.json /home/product_service/
COPY package-lock.json /home/product_service/

RUN npm ci
COPY . /home/product_service
RUN npm install -g nodemon
RUN npm install

ENTRYPOINT ["nodemon", "/home/product_service/app.js"]