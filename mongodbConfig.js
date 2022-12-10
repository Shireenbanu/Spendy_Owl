const mongoose = require('mongoose')
const api_constants = require('./api_constants')
const env = require("dotenv").config();
module.exports.db_connection= function(){

    const connection =  mongoose.connect(process.env.db_url);
    console.log('Db connection established successfully!')
   return connection
}

// console.log(SomeModel.find({_id: "633d5812dd1b966c6eea3aee"}) )

//     SomeModel.find().then(customers => { 
//       console.log("insiden ")             
//     console.log(customers[0].thread_id); // 'A'
//     console.log(customers[3].thread_id); 
//     customers.map(customer=>{console.log(customer.thread_id)})
//   })