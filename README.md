# Spendy_Owl-🐣

## How to run app locally 


 ***To start the app:***
 
  npm start (Locally starts the application)
  
  get http:localhost:5000/top_four_spends (to get the top four spends of the month)
  
  

***To dockerise the application:

It intern creates a docker images  (make sure docker is running before you run the command)***

docker build . -t your_public_repo_name/spendy_owl --platform linux/amd64
 
 
 
***To start docker container***
 
docker run -d -p 8080:5000 docker_image_id  

Go to localhost to check the end_points

get http:localhost:8080/top_four_spends (To connect to app running inside the docker container)



