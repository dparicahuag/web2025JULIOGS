#Build Image
#FROM node:15-alpine as builder
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

#RUN npm ci --quiet

#COPY ./prisma prisma
#COPY ./src src
#RUN npm run build

#Producction Image

FROM node:16.15.1-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm ci

COPY . .

EXPOSE 3000

RUN npm run build

RUN npm config set strict-ssl false
RUN npx prisma db pull
RUN npx prisma generate

ENV PORT 3000
CMD [ "npm", "start" ]

