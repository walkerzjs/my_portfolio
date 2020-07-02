# build stage
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN yarn install
COPY . /app
RUN CI=true npm run test
# RUN mv ./babel.config.js ./babel.ignore
RUN npm run build
# RUN mv ./babel.ignore ./babel.config.js

# final stage
# FROM nginx:1.16.0-alpine
# COPY --from=build /app/.next /usr/share/nginx/html
EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;","npm","start;"]
CMD [ "npm", "start" ]