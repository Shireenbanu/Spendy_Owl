const cron = require('node-cron');
const mails = require('./getAllMails')

// Schedule tasks to be run on the server.
cron.schedule('* * 9 * *', async function() {
    console.log('running a task every minute');
     await mails.mails_yesterday()
  });