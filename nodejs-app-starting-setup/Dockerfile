# node 18 is going to be the base image on which the application will run
FROM node:18
# This is the working directory of the file system inside the container which would be created using this docker file
WORKDIR /app
# Copies the package.json from the host machine to the container (We are copying package.json first because this is something that would not change frequently abd hence while rebuilding the image this part would be cached)
# if it is copied with everything else any change in code would trigger installing of node dependencies again (as image is layer based and change in one layer would require other layers to be executed again) which is not required until there is a changed in package.json
COPY package.json /app
# Run [npm istall] to install all the dependecies required for the applicaton to run 
RUN npm set strict-ssl false
RUN npm install
# Copy the current snapshot of the code form the host machine (local laptop) to image/conatiner
COPY . /app
# expose the port from inside the container to the host machine
EXPOSE 80
# The application will be run using the below command when the container is run 
CMD ["node","server.js"]

# setting up the working directory tells docker that all the commands will be run from inside (relative to) the working directory.

# command to build --> docker build .
# command to run --> docker run -p localport:exposedport {imgae name} [ eg: docker run -p 3000:80 338764e] 