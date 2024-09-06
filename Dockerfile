FROM node:current-alpine3.20
WORKDIR /app
EXPOSE 4200
COPY . .
RUN npm install
