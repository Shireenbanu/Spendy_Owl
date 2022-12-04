const api_constants = require("./api_constants")
const request_call = require("./request_call")
const spendDetail = require('./models/spendDetail')
const getToken = require('./getGoogleAccessToken')

module.exports.getThreadDetails= function(threadId, category){

  getToken.access_token().then(function(){

  emailDetail = request_call('GET',api_constants.get_mail_details_url+threadId, '',{ Authorization: "Bearer " + accessToken})

  emailDetail.then(async function(response){
    headersArray= response.data.payload.headers
    foundSubject = headersArray.find(nameValue => nameValue.name === 'Subject')
    amount_spent =foundSubject.value.replace(/\D/g, '') 
    console.log(foundSubject.value.replace(/\D/g, ''))
    filter = {thread_id: threadId}
    update = {email_subject: foundSubject.value, spent_date: api_constants.yesterday, money_spent: amount_spent, category: category}
    await spendDetail.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true // Make this update into an upsert
    });

    console.log(`category is ${category}, amount spent is ${amount_spent}`)
  }).catch(function(error){
    console.log('error'+error)
  })

}).catch(function(error){
  console.log('error'+error)

})

}