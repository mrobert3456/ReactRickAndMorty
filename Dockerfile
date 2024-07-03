FROM node:20 as build

ARG REACT_APP_API_ORIGIN
ENV REACT_APP_API_ORIGIN=${REACT_APP_API_ORIGIN}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
