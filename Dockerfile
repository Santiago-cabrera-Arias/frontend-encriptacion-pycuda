# Etapa de construcción (build stage)
FROM node:16.14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etapa de producción
FROM nginx:latest

COPY --from=build /app/dist/* /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g","daemon off;"]