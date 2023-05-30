# develop stage
FROM node:lts as builder
RUN corepack enable
# RUN corepack prepare pnpm@latest --activate
RUN corepack prepare pnpm@7.11.0 --activate
# RUN pnpm setup
# export PNPM
RUN mkdir /pnpm
ENV PNPM_HOME="/pnpm/"
ENV PATH="${PNPM_HOME}/:$PATH"
RUN pnpm -g install @quasar/cli
RUN pnpm -g list


WORKDIR /app
# Files required by pnpm install
COPY package.json ./
# pnpm-lock.yaml .pnpmfile.cjs .npmrc ./
# RUN pnpm install --frozen-lockfile --prod

# build stage
# FROM develop-stage as build-stage
RUN pnpm install

ENV API=http://localhost:3000/

COPY . .
# RUN pnpm exec quasar --help
RUN pnpm exec quasar build

# production stage
# FROM nginx:1.17.5-alpine as production-stage
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html

# web server to serve webapp
# FROM python:3.9-slim
# COPY --from=builder /app/dist/spa /app
# WORKDIR /app
# EXPOSE 9000
# CMD ["python", "-m", "http.server", "9000"]

# Install NGINX, remove the default NGINX index.html file, and
# copy the built static site files to the NGINX html directory.
FROM nginx:mainline-alpine
RUN mv /usr/share/nginx/html/index.html /usr/share/nginx/html/old-index.html
COPY --from=builder /app/dist/spa /usr/share/nginx/html/
ENV API=http://localhost:3000/
# Instruct the container to listen for requests on port 80 (HTTP).
EXPOSE 80
