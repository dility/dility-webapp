# develop stage
FROM node:lts as develop-stage
RUN corepack enable
# RUN corepack prepare pnpm@latest --activate
RUN corepack prepare pnpm@7.11.0 --activate
# RUN pnpm setup

WORKDIR /app
# Files required by pnpm install
COPY package.json ./
# pnpm-lock.yaml .pnpmfile.cjs .npmrc ./
# RUN pnpm install --frozen-lockfile --prod

# build stage
# FROM develop-stage as build-stage
COPY . .
RUN pnpm install
RUN pnpm add -D @quasar/cli
# RUN pnpm exec quasar --help
# RUN pnpm exec quasar build

# production stage
# FROM nginx:1.17.5-alpine as production-stage
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 9000
# CMD ["bash"]
CMD ["pnpm", "exec", "quasar", "dev"]
