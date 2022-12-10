const cron = require('node-cron');
const { gets_all_mail } = require('./getAllMails');

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
    console.log('running a task every minute');
    gets_all_mail.mails_yesterday()
  });