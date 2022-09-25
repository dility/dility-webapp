FROM node:lts AS development
RUN corepack enable
ENV PNPM_VERSION=7.11.0
ENV PNPM_HOME="/pnpm"
# RUN corepack prepare pnpm@latest --activate
RUN corepack prepare pnpm@${PNPM_VERSION} --activate
# RUN pnpm setup
# export PNPM
RUN mkdir ${PNPM_HOME}
ENV PATH="${PNPM_HOME}/:$PATH"

WORKDIR /usr/src/app
COPY package*.json ./

RUN pnpm install
COPY . .
RUN pnpm run build



FROM node:lts as production

ARG NODE_ENV=production
ARG SEND_GRID_KEY=some-key

ENV NODE_ENV=${NODE_ENV}
ENV SEND_GRID_KEY=${SEND_GRID_KEY}
ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
EXPOSE ${PORT}
CMD ["node", "dist/main"]
