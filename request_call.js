const axios = require("axios");
const { response } = require("express");
const api_helper = require("./api_constants");

module.exports = function (method, uri, body,headers) {
  
  let config = {
    method: method.toLowerCase(),
    url: uri,
    headers: headers,
  };
  console.log(config)

   apiResult = axios(config)

   return apiResult
};
