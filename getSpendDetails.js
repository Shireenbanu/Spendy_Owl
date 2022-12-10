const api_constants = require("./api_constants")
const request_call = require("./request_call")

module.exports.getThreadDetails=function(threadId){
  emailDetail = request_call('GET',api_constants.get_mail_details_url+threadId, '')
  emailDetail.then(function(response){
    headersArray= response.data.payload.headers
    foundSubject = headersArray.find(nameValue => nameValue.name === 'Subject')
    console.log(foundSubject)
  }).catch(function(error){
    console.log('error'+error)
  })
}