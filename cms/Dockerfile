FROM node:22-alpine

WORKDIR /opt/app

RUN apk add --no-cache build-base python3

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
