FROM node:12.4.0

EXPOSE 3001
WORKDIR /home/user_service

COPY package.json /home/user_service/
COPY package-lock.json /home/user_service/

RUN npm ci
COPY . /home/user_service

RUN npm install -g nodemon
RUN npm install

ENTRYPOINT ["nodemon", "/home/user_service/app.js"]