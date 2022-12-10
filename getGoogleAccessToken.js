const api_constants = require('./api_constants')
const request_call = require('./request_call')
const spendyOwlConstant = require('./models/spendyOwlConstants')
const moment = require('moment')

module.exports.access_token = async function(){

  try{
    foundRecord = await spendyOwlConstant.findOne({group_key: "refreshToken"})
    console.log('found Record')
    accessToken = foundRecord.key
    console.log(new Date(moment())>new Date(Number(foundRecord.value)) + "true or false")
    console.log(foundRecord.key)
    if (new Date(moment())>new Date(Number(foundRecord.value)))
    {   
        console.log('Generating new one!')
        result = request_call('Post',api_constants.renew_access_token,'',{'Content-Type': 'application/json'})
        result.then( async function(response){
        modelToUpdate = await spendyOwlConstant.updateOne({group_key: 'refreshToken'},{key: response.data.access_token, value: moment().add(response.data.expires_in, "seconds") })
        accessToken= response.data.accessToken   
    }).catch(function(error){
        console.log("Couldnot generate access token:Error: "+error)
       }) 
    }
  }
  catch(error)
  {
    console.log("Error: "+error)
  }
  return accessToken
}

