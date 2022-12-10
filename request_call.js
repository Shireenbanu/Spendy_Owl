const axios = require("axios");
const { response } = require("express");
const api_helper = require("./api_constants");

module.exports = async function (method, uri, body,headers) {
  
  let config = {
    method: method.toLowerCase(),
    url: uri,
    headers: headers,
  };

   apiResult = await axios(config)
   return apiResult
};
