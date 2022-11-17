const api_helper = require('./api_constants')
const request_call = require('./request_call')
const getSpends = require('./getSpendDetails')
const getToken = require('./getGoogleAccessToken')

module.exports.mails_yesterday = async function(){
try {
 getsAllMail = api_helper.gets_all_mail.concat(api_helper.yesterday);
 accessToken = await getToken.access_token();
 console.log('access Token is: '+ accessToken);
  response = await request_call('GET',getsAllMail,'',{ Authorization: "Bearer " + accessToken})
  console.log(response.data.messages)
  numberOfRecords = response.data.resultSizeEstimate
  console.log(response.data.resultSizeEstimate)

  if (numberOfRecords>0){
    messagesId = response.data.messages
    messagesId.map(message=>{
      console.log(message.threadId)
      getSpends.getThreadDetails(message.threadId)
    })
  }
}
 catch{
   console.log('Sorry! something went brutally wrong 😢')
 }

}

