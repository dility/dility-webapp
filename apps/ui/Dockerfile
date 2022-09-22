# develop stage
FROM node:lts as builder
RUN corepack enable
# RUN corepack prepare pnpm@latest --activate
RUN corepack prepare pnpm@7.11.0 --activate
# RUN pnpm setup
RUN npm --global install @quasar/cli

WORKDIR /app
# Files required by pnpm install
COPY package.json ./
# pnpm-lock.yaml .pnpmfile.cjs .npmrc ./
# RUN pnpm install --frozen-lockfile --prod

# build stage
# FROM develop-stage as build-stage
RUN pnpm install
COPY . .
# RUN pnpm exec quasar --help
RUN pnpm exec quasar build

# production stage
# FROM nginx:1.17.5-alpine as production-stage
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html

# web server to serve webapp
FROM python:3.9-slim
COPY --from=builder /app/dist/spa /app
WORKDIR /app
EXPOSE 9000
CMD ["python", "-m", "http.server", "9000"]
# CMD ["bash"]
# CMD ["pnpm", "exec", "quasar", "dev"]
