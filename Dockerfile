FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./


# Install app dependencies
RUN npm install --force

RUN npm run build

COPY . .

CMD [ "npm", "run", "start:prod" ]