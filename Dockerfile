FROM nginx:1.21.0-alpine
COPY ./artifact /usr/share/nginx/html
