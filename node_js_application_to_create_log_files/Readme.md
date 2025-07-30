In this code snippet I have tried to use the volumes concept.

# Scenario 1

In the readFile() function I check if the logfile.txt exsists or not.

If no I call the function printDataEverysec()
with the help of this function I create a logfile.txt and write some data in the file at regular intervals using the setInterval() function

Once the exit condition is met I clear the interal and call the readFile() function.
As the file now exsists the function prints the content of the file.

# Scenario 2

I run the code again
I call the readFile() function
The function finds that there is already a file created.
It straightaway reads from the file , it does not create/write the file/data again

# Scenario 3

After dockerzing the application
The code runs in the container for the first time where it creates the file writes the data in the file and then exsists the container.
If we run the container again the readFile() function would straight-away read data from the logfile.txt as it would be available in the conatiner file system
However if the container is deleted then the logfile.txt is also lost and the next container created from the same image will not have any access to a logfile.txt

In this case such that a new container can access the logfile.txt we would need to map the file to a named volume
which we can do like the below mentioned example
docker run --name {cont_name} -v log:/app {cont_img}

# /app is the mount point inside the container where the volume will appear.

# Any files written to /app in the container will actually be stored in the log volume.

This will allow a new container to access the already written file logfile.txt as it has been mapped to a volume

# docker run -p 3000:3000 --name node_ct1 -v node_vol:/app node_img --> this is the command required to run the container created from this docker image
