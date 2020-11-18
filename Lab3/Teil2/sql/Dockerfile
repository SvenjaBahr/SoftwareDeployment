FROM debian:jessie

ENV DB_NAME=sd_lab3_sql
ENV DB_USER=svenjabahr
ENV DB_PASSWORD=passWord123

USER root

RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server

COPY docker-entrypoint.sh docker-entrypoint.sh
COPY sec_install.sh sec_install.sh
COPY init.sql /docker-entrypoint-initdb.d/

RUN ./sec_install.sh

ENTRYPOINT ./docker-entrypoint.sh

EXPOSE 3306