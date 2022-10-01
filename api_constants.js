moment = require('moment')

module.exports ={
     access_token : 'ya29.a0Aa4xrXOJ3YPOYDRrnPkwEWojj5ex57YorOOtdoqd_T0eUTMemhGh6aE3vmLsTLo23N2tVJkpzAfBV9AkHylPrgXS4lB4QbeM9Xrt4Bu66JxfyKWJUYpH3aGVmNcJoO3VE7STaKj-BdCVt4zlOiyjKq4RGgkmGAaCgYKATASARISFQEjDvL9wU81SWEGswDYNqGEuPu8gw0165',
     gets_all_mail : 'https://www.googleapis.com/gmail/v1/users/me/messages?q=from:phonepe ',
     yesterday :  'after:'+moment().subtract(3, 'days').format('YYYY/MM/DD'),
     get_mail_details_url : 'https://gmail.googleapis.com/gmail/v1/users/shireenbanu89@gmail.com/messages/'
}

