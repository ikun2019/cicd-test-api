FROM node:16.16.0-alpine3.16 AS base

WORKDIR /workspace

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "watch"]

# prodiction
FROM base AS production
CMD ["npm", "run", "start"]