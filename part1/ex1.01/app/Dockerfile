FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# Use below for production
# RUN npm ci --only=production

COPY . .

CMD ["npm", "start"]