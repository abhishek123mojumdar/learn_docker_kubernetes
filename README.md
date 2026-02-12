# learn_docker_kubernetes

The agenda is to learn docker and kubernetes

16th December 2024
test

13th March 2025

created go app by my own
created an image for and interactive terminal

22nd july
Starting again on the learning curve

30th July
Polishing concepts of volumes in docker

# docker exec -it node_ct /bin/bash --> this helps to get inside the container file system (node_ct here is the name of the container)

# docker start {cont_id} --> starts the docker container in detached mode

# docker start -a -t {cont_id} --> starts the container in attached mode

# docker volumes ls --> lists all the volumes

# docker ps -a --> List all containers

# docker ps --> lists all running containers

# docker image ls --> list all images

# docker rmi {img-id} --> removes the image (images can be removed only if no container is using it)

# docker image prune --> removes all the dangling images

# docker rm {ct_id} --> removes the container

# docker rm {ct_id} {ct_id1} {ct_id2} --> removes multiple containers

# docker build -t {image_name} . --> builds the image with the given name

# docker build -t {image_name}:latest . --> builds the image with the given image name and tag it latest

# docker image inspect {img_id} --> provides the detailed information about the image

# docker cp {local_file} {cont_id}:{container_path} --> copies the file from local to container

# docker cp {cont_id}:{container_path} {local_path} --> copies the file from container to local

# docker run --name {cont_name} {img_id} --> creates a container with the name provided form the image_id provided

# docker run -p {local_port}:{container_port} {img_id} --> creates a container and exposes the container port to the local port

# docker run -d --name {cont_name} -p {local_port}:{container_port} {img_id} --> creates a container and exposes the container port to the local port and runs it in detached mode. It assigns a name to the container {cont_name}

# if a container has started in detached mode and we want to attach to it we can use the below command

# docker attach {cont_id} --> attaches to the container

# if a container has started without a port mapping we can not directly add port mapping to it we need to stop the container and then remove it and then run it again with the port mapping

# docker run --rm --name {cont_name} -p {local_port}:{container_port} {img_id} --> creates a container and exposes the container port to the local port and removes it after it stops running.

# docker logs -f {cont_id} --> provides the log inside a container and -f helps to follow the log

# docker create vol {vol_name} --> creates a volume

# docker volume ls --> lists all the volumes

# docker volume inspect {vol_name} --> provides the detailed information about the volume

# docker volume rm {vol_name} --> removes the volume

# docker volume prune --> removes all the dangling volumes

# docker run -v {vol_name}:{container_path} -p {local_port}:{container_port} --name {cont_name} {img_id} --> creates a container and mounts the volume to the container path

# docker run -v {vol_name}:{container_path} -v {local_path2}:{container_path2} -p {local_port}:{container_port} --name {cont_name} {img_id} --> creates a container and mounts the local path to the container path this is called bind mounting

28th August
Docker Networking

31st Jan 2026

IMPORTANT

CONTAINER BASE IMAGES FILES AND FOLDERS

/bin --> contains the binary files of the application such as ls , cat , echo etc

/sbin --> contains the binary files of the system such as init , shutdown , reboot etc

/lib --> contains the library files of the application, these are used by the binary files of the application

/etc --> contains the configuration files of the system services

/usr --> contains the user files of the application such as user level application files

/var --> contains the variable files of the application such as log files, spool files, temp files etc

/root --> contains the root files of the application
