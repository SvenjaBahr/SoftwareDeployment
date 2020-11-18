FROM debian:jessie

ENV DB_NAME=sd_lab3_wp
ENV DB_USER=svenjabahr
ENV DB_PASSWORD=passWord123
ENV DB_HOST=unknown

RUN apt-get update 
RUN apt-get install wordpress -y
RUN mv /var/www/html/index.html /var/www/html/index.bak
RUN mv /usr/share/wordpress/wp-config-sample.php /etc/wordpress/config-localhost.php
RUN cp -R /usr/share/wordpress/* /var/www/html/

COPY docker-entrypoint.sh docker-entrypoint.sh

ENTRYPOINT ./docker-entrypoint.sh
EXPOSE 80