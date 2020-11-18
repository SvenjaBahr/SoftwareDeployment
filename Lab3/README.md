## Teil 1

Ein `docker-compose.yaml` wurde erstellt und dann mit dem Befehl  `docker-compose -d` im Terminal gestartet. Dannach kann man vom Docker Container die Webseite unter `localhost:3000` erreichen.

## Teil 2

##### init.sql

Mit dieser Datei kann die Datenbank generiert werden.

##### Dockerfile

Im ersten Schritt kommt es zur Aktualisierung des Sysmtens. Anschließend wird SQL installiert. Zusätzlich werden die Umgebungsvariabeln gesetzt.

##### docker-entypoint.sh

Das Skript ist für die SQL-Konfigurationsdatei. Dabei verwendet es die Umgebungsvariablen aus dem "Dockerfile".

### Deployment

Im Terminal geht man in den jeweiligen Ordner "sql" und "wordpress" und führt dann für den jeweiligen Ordner folgende Befehle aus:

-) `docker build -t bahrsvenjasql .` für den Ordner "sql" 

-) `docker build -t  bahrsvenjawp .` für den Ordner "wordpress"

Anschließend geht man im Terminal in den Haupordner "Teil2" zurück und führt den Befehl `docker-compose up -d` aus. Dannach ist die Seite unter localhost:80 erreichbar.
