const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const axios = require('axios')
const api_call = require('./getAllMails')
const set_db = require('./mongodbConfig')
const access_token = require('./getGoogleAccessToken')
const topHeader = require('./topFiveSpend')

app.listen(PORT,()=>{
    console.log("Running application")
})


conn = set_db.db_connection()
conn.then(()=>{
    console.log('successfully db connection established')
    api_call.mails_yesterday()
    // topHeader.getTopFive()

})
.catch(err=>{console.log("error"+err)})

