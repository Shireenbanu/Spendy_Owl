const api_helper = require('./api_constants')
const request_call = require('./request_call')
const getSpends = require('./getSpendDetails')
const getToken = require('./getGoogleAccessToken')
const { yesterday } = require('./api_constants')

module.exports.mails_yesterday = async function(){
try {
 accessToken = await getToken.access_token();
 for(category of api_helper.array_of_categories){
 getsAllMail =`${api_helper.gets_all_mail} after:${yesterday} before:${moment(yesterday, 'YYYY/MM/DD').add(1, 'days').format( 'YYYY/MM/DD')} label:${category}`
 console.log(`Request being made is ${getsAllMail}`)
  response = await request_call('GET',getsAllMail,'',{ Authorization: "Bearer " + accessToken})
  console.log(response.data)
  numberOfRecords = response.data.resultSizeEstimate

  if (numberOfRecords>0){
    messagesId = response.data.messages
    messagesId.map(message=>{
      getSpends.getThreadDetails(message.threadId, category)
    })
  }
 }
}
 catch(error){
   console.log('Sorry! something went brutally wrong 😢'+ error.message)
 }

}

