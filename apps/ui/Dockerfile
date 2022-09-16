
# USER root
# RUN npm install -g @quasar/cli && \
#     npm install -g @vue/cli && \
#     npm install -g @vue/cli-init 

# RUN mkdir /home/node/app

# VOLUME [ "/home/node/app" ]
# WORKDIR /home/node/app

# develop stage
FROM node:lts as develop-stage
WORKDIR /app
COPY package*.json ./
RUN yarn global add @quasar/cli
RUN yarn

# build stage
FROM develop-stage as build-stage
COPY . .
RUN quasar build

# production stage
# FROM nginx:1.17.5-alpine as production-stage
# COPY --from=build-stage /app/dist/spa /usr/share/nginx/html
EXPOSE 80
CMD ["yarn", "quasar", "serve"]
