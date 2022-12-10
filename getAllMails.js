const api_helper = require('./api_constants')
const request_call = require('./request_call')
const getSpends = require('./getSpendDetails')
module.exports.mails_yesterday = function(){

 getsAllMail = api_helper.gets_all_mail.concat(api_helper.yesterday)
 result = request_call('GET',getsAllMail,'')

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

}

