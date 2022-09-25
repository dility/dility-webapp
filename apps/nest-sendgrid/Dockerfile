FROM node:lts AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf
RUN npm install
COPY . .
RUN npm run build

FROM node:lts as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

ARG SEND_GRID_KEY=some-key
ENV SEND_GRID_KEY=${SEND_GRID_KEY}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
