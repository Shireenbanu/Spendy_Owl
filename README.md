# Spendy_Owl-🐣

## How to run app locally 

 To start the app:
 
  npm start

## To docker images  (make sure docker is running before you run the command)
docker build . -t your_public_repo_name/spendy_owl --platform linux/amd64
 
## To start docker container
docker run -d -p 8080:5000 docker_image_id  


