const api_constants = require('./api_constants')
const request_call = require('./request_call')
const spendyOwlConstant = require('./models/spendyOwlConstants')
const moment = require('moment')
const { response } = require('express')

module.exports.access_token = async function(){

  try{
    foundRecord = await spendyOwlConstant.findOne({group_key: "refreshToken"})
    accessToken = foundRecord.key
    if (new Date(moment())>new Date(Number(foundRecord.value)))
    {   
        console.log('Generating new one!')
        const response = await request_call('Post',api_constants.renew_access_token,'',{'Content-Type': 'application/json'})
        console.log('response is: '+response.data)
        const modelToUpdate = await spendyOwlConstant.updateOne({group_key: 'refreshToken'},{key: response.data.access_token, value: moment().add(response.data.expires_in, "seconds") })
        console.log('modelToUpdate '+modelToUpdate)
        accessToken = response.data.access_token  
        console.log('new AccessToken is :'+response.data.access_token)
    }
  }
  catch(error)
  {
    console.log("Error: Cannot generate accessToken"+error)
  }
  return accessToken
}

