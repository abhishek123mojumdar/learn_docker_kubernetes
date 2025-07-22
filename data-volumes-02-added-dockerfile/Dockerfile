FROM node:18

WORKDIR /app

COPY package.json /app

RUN npm set strict-ssl false
RUN npm install

COPY . .

EXPOSE 80

#VOLUME ["/app/feedback"] this will create annonymous volumes
#annonymous volumes get deleted as soon as the container is removed
#annonymous volumes are handled by docker user do not have any control on it


#docker run -p 3000:80 --rm --name vol-app -v feedback-vol:/app/feedback  vol <-- this is how we create named volumes
#docker run -p 3000:80 --rm --name vol-app -v feedback_vol:/app/feedback -v "/Users/amojumdar/Public/personal-workspace/learn_docker_kubernetes/data-volumes-02-added-dockerfile:/app" -v /app/node_modules  vol <-- creating bind mounts
#docker run -p 3000:80 --rm --name vol-app -v feedback_vol:/app/feedback -v "/Users/amojumdar/Public/personal-workspace/learn_docker_kubernetes/data-volumes-02-added-dockerfile:/app:ro" -v /app/node_modules  vol <-- creating bind mounts and read only volumes
CMD ["npm",  "start"] 