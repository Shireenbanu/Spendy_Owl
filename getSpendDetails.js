const api_constants = require("./api_constants")
const request_call = require("./request_call")
const spendDetail = require('./models/spendDetail')
const getToken = require('./getGoogleAccessToken')

module.exports.getThreadDetails=function(threadId){

  getToken.access_token().then(function(){

  emailDetail = request_call('GET',api_constants.get_mail_details_url+threadId, '',{ Authorization: "Bearer " + accessToken})

  emailDetail.then(function(response){
    headersArray= response.data.payload.headers
    foundSubject = headersArray.find(nameValue => nameValue.name === 'Subject')
    console.log(foundSubject)
    spendDetail.create({thread_id: threadId, email_subject: foundSubject.value, spent_date: api_constants.spent_date})
  
  }).catch(function(error){
    console.log('error'+error)
  })

}).catch(function(error){
  console.log('error'+error)

})

}