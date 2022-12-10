moment = require('moment')

module.exports ={
     access_token : 'ya29.a0Aa4xrXMbbFDLuXwM5yph2ZSgfylJTjDW4zkWTGT5MSDK4-MrCPwvuPjfJazpbzKcuXIEMvZxIrE93pYNA2ZiNXx3xK7WprA7tk_Bd54GFHFW8Zb5LEA39aDIk0NiQcaMu7uSlWq-SiflU0DD8EyAikB9_-KdKAaCgYKATASARASFQEjDvL9ZeWiujX0opxiGDiyHcuTtA0165',
     gets_all_mail : 'https://www.googleapis.com/gmail/v1/users/me/messages?q=from:phonepe ',
     yesterday :  'after:'+moment().subtract(3, 'days').format('YYYY/MM/DD'),
     get_mail_details_url : 'https://gmail.googleapis.com/gmail/v1/users/shireenbanu89@gmail.com/messages/',
     today : moment(),
     db_url : 'mongodb+srv://shireenbanu:+ERPX&FEyLLwc8L@clusterspendyowl.w16igpn.mongodb.net/?retryWrites=true&w=majority',
     spent_date : moment().subtract(1,'days')
}

