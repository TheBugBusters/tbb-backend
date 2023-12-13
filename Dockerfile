FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./


# Install app dependencies
RUN npm install --force

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]