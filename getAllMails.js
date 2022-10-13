const api_helper = require('./api_constants')
const request_call = require('./request_call')
const getSpends = require('./getSpendDetails')
const getToken = require('./getGoogleAccessToken')

module.exports.mails_yesterday = function(){

 getsAllMail = api_helper.gets_all_mail.concat(api_helper.yesterday)
 console.log('before the call access token'+getToken.access_token())
 getToken.access_token().then(function(){
  result = request_call('GET',getsAllMail,'',{ Authorization: "Bearer " + accessToken})
  result.then(function(response){
     messages = response.data.messages
     console.log(messages)
     messages.map(messageId =>{
         console.log(messageId.id)
         getSpends.getThreadDetails(messageId.id)
     })
 
   }).catch(function(error){
     console.log(error.response.data)
   })
 }).catch((error)=>{
  console.log("Please check your access token generation process")
 })
 

}

