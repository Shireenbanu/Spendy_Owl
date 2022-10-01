const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const axios = require('axios')
const api_call = require('./getAllMails')


app.listen(PORT,()=>{
    console.log("Running application")
})

api_call.mails_yesterday()

// axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(function(response){
        
//         })
//         .catch(function(response){
          
//         })
//         .then(function(){
//             console.log("Alaway Executed")
//         })
