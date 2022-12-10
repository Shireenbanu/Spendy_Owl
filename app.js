const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const axios = require('axios')
const api_call = require('./getAllMails')
const set_db = require('./mongodbConfig')
const access_token = require('./getGoogleAccessToken')
const topHeader = require('./topFiveSpend')
const spendDetail=require('./models/spendDetail')
const cronJob = require('./cronJob')
app.listen(PORT,()=>{
    console.log("Running application")
})


app.get('/top_four_spends', (req, res) => {
    console.log('sending information: ')
    info = topHeader.getTopFive().then((items)=>{
        console.log(items)
        res.send(items)
    }).catch(err=>{
        res.send(err)
    })
    
});

conn = set_db.db_connection()
conn.then(async()=>{
    // var moment = require('moment');
    // var start_date = moment('2022-11-01');
    // var end_date = moment('2022-11-30');
    
    // for (var m = moment(start_date); m.isBefore(end_date); m.add(1, 'days')) {
    //     console.log(m.format('YYYY/MM/DD'));
    //     apiDate = m.format('YYYY/MM/DD')
    //     await api_call.mails_yesterday(apiDate)

    // }
    // spendDetail.deleteMany({}).then(console.log("deleted all")).catch()
    console.log('successfully db connection established')

})
.catch(err=>{console.log("error"+err)})

