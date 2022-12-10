moment = require('moment')

module.exports ={
     access_token : 'ya29.a0Aa4xrXOJ3YPOYDRrnPkwEWojj5ex57YorOOtdoqd_T0eUTMemhGh6aE3vmLsTLo23N2tVJkpzAfBV9AkHylPrgXS4lB4QbeM9Xrt4Bu66JxfyKWJUYpH3aGVmNcJoO3VE7STaKj-BdCVt4zlOiyjKq4RGgkmGAaCgYKATASARISFQEjDvL9wU81SWEGswDYNqGEuPu8gw0165',
     gets_all_mail : 'https://www.googleapis.com/gmail/v1/users/me/messages?q=from:phonepe ',
     yesterday :  'after:'+moment().subtract(1, 'days').format('YYYY/MM/DD'),
     before : 'before:'+moment().format('YYYY/MM/DD'),
     get_mail_details_url : 'https://gmail.googleapis.com/gmail/v1/users/shireenbanu89@gmail.com/messages/',
     today : moment(),
     spent_date : moment().subtract(1,'days'),
     renew_access_token:'https://accounts.google.com/o/oauth2/token?client_secret=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&grant_type=refresh_token&client_id=179904550079-s0n16f88l92blimucpfcinn5q5bkmu2m.apps.googleusercontent.com&refresh_token=1//04PuA1fWb6BfyCgYIARAAGAQSNwF-L9Ir65zCfPUcJei-SNpTiti8IrKLyQ5YZrMbxD4j6r6L_GdxQNEES3jUUj5ZRRxRBwXQlno',
}