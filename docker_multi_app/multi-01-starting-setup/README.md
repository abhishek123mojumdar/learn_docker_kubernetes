The below commnad help to run the mongo DB container with a volume named data and expose the container to the network full_stack_net
Have authentication with username: abhi and password: secret

 <!-- docker run --name mongoDB --network full_stack_net -v data:/data/db \
 -e MONGO_INITDB_ROOT_USERNAME=abhi \
 -e MONGO_INITDB_ROOT_PASSWORD=secret \
 --rm mongo -->

The below command creates a container for the backed expose it to port 80 and also to the network full_stack_net

# docker run --network full_stack_net --name back_ct -p 80:80 --rm back_img

The below command creates a container for the frontend expose it to port 3000 and also to the network full_stack_net

# docker run --network full_stack_net --name fe_ct -p 3000:3000 --rm fe_img

The below command is used to bind mount the frontend application with our local system , such that any changes in local reflects in the container as well. This is done by mapping the frontend folder to the container.

# docker run -v /Users/abhishek/Documents/abhishek/learn_docker_kubernetes/docker_multi_app/multi-01-starting-setup/frontend/src:/app/src -v /app/node_modules --network full_stack_net --name fe_ct -p 3000:3000 --rm fe_img
