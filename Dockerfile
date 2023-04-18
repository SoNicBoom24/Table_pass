FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build


CMD ["pnpm", "dev"]
