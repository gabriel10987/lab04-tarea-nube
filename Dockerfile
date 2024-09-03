FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Definir la variable de entorno
ENV MONGODB_URI=mongodb://mongodb:27017/miBaseDeDatos

EXPOSE 9000
CMD ["node", "app.js"]

