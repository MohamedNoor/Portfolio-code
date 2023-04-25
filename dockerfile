# Base image
FROM node:14-alpine as builder

# Set working directory
WORKDIR /app

# Copy package-lock.json
COPY package-lock.json .
COPY package.json .

RUN npm install
# Copy the rest of the application files
COPY . .

RUN npm run build

#COPY build/static/css/main.6532fb9a.css .
#COPY build/static/js/main.88ed189d.js .

#Stage 2

FROM nginx:1.21-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build /usr/share/nginx/html/
#COPY --from=builder /app/build/static/css/main.6532fb9a.css /usr/share/nginx/html/static/css/


ENTRYPOINT ["nginx", "-g", "daemon off;"]

#stage 3