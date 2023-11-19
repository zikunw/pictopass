FROM node:18.5-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --force

COPY . .
RUN npm run build

WORKDIR /app/dist
CMD ["npx", "serve", "-sl", "8080"]