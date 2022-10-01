const axios = require("axios");
const { response } = require("express");
const api_helper = require("./api_constants");

module.exports = function (method, uri, body) {
  
  let config = {
    method: method.toLowerCase(),
    url: uri,
    data: body,
    headers: { Authorization: "Bearer " + api_helper.access_token },
  };

   apiResult = axios(config)

   return apiResult
};
