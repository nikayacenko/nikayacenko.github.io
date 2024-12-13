version: '3.9'

services:
#Postgress DB
  postgres:
    image: postgres:latest
    container_name: postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: qwerty
    volumes:
      - ./postgres/init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app_network
#Python app
  app:
    build: ./python_app
    restart: always
    container_name: python_app
    environment:
      DB_HOST: postgres
      DB_PORT: 5432
      DB_NAME: users
      DB_USER: alex
      DB_PASSWORD: qwerty
    depends_on:
      - postgres
    networks:
      - app_network
#NGINX
  nginx:
    image: nginx:latest
    container_name: nginx_proxy
    restart: always
    depends_on:
      - app
    volumes:
      - ./nginx/nginx.conf/nginx.conf:/etc/nginx/nginx.conf
    ports:
      - 80:80
    networks:
      - app_network
networks:
  app_network:
   driver: bridge
volumes:
  db_data:
