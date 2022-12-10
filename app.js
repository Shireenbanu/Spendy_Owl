const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const axios = require('axios')
const api_call = require('./getAllMails')
const set_db = require('./mongodbConfig')
const access_token = require('./getGoogleAccessToken')

app.listen(PORT,()=>{
    console.log("Running application")
})


conn = set_db.db_connection()
conn.then(()=>{
    console.log('successful')
//   console.log(  access_token.access_token().then(()=>{console.log(accessToken)}))
//   access_token.access_token().then(()=>{a = accessToken})
//   console.log("a "+ a)

    api_call.mails_yesterday()
})
.catch(err=>{console.log("error"+err)})

// axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(function(response){
        
//         })
//         .catch(function(response){
          
//         })
//         .then(function(){
//             console.log("Alaway Executed")
//         })
