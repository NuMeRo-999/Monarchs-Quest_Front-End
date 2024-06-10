# Monarchs-Quest Frontend

Este repositorio contiene el código del frontend para el juego web "Monarchs-Quest", desarrollado con React y dockerizado para facilitar su despliegue.

## Requisitos previos

- Docker

## Clonación del repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/NuMeRo-999/Monarchs-Quest_Front-end.git
cd Monarchs-Quest_Front-end
```
### Despliegue de contenedores
Para construir la imagen y levantar los contenedores de Docker, sigue estos pasos:

### Construcción de la imagen
```bash
docker build --pull --rm -f "Dockerfile" -t monarchs-quest_frontend:latest .
```
### Ejecución del contenedor
```bash
docker run --rm -d --name front-end-container -p 3030:80/tcp monarchs-quest_frontend:latest
```
## Estructura del proyecto
 - Dockerfile: Configuración para construir la imagen de Docker.
 - config/default.conf: Configuración de Nginx para servir la aplicación.
   
# Acceso al frontend
  Con estos comandos, el frontend estará disponible en el localhost con el puerto 3030 -> http://localhost:3030

# Notas adicionales
  Asegúrate de que el puerto 3030 esté libre antes de ejecutar el contenedor.
  Si necesitas detener y eliminar el contenedor, puedes usar el siguiente comando:
  ```bash
  docker stop front-end-container
  ```
# Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor, crea un fork del repositorio y envía un pull request.
