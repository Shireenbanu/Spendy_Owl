
const moment = require('moment')
const spendDetail = require('./models/spendDetail')
const today = moment().startOf('day')


module.exports.getTopFive =  async function(){
    // money spent in the last 30 days
    console.log("from date "+ moment().subtract(30, 'days').toDate())
    console.log("to_date "+ today.endOf('day').toDate())
    // foundRecords=  spendDetail.find({
    //     spent_date: {
    //       $gte: moment().subtract(30, 'days').toDate(),
    //       $lte: today.endOf('day').toDate()
    //     }
    //   },function(err, messages){
    //     if (err){
    //         console.log(err+ "Cannot fetch data from Mongodb");
    //     }
    //     else{
    //         console.log("First function call : ", messages);
          
    //     }
    //   })
    foundRecords =await spendDetail.aggregate([
      {
        $match: {
          spent_date: {
                  $gte: moment().subtract(30, 'days').toDate(),
                  $lte: today.endOf('day').toDate()
                }
        }

      },
      {
        $group : {
          _id : '$category',amount: {$sum: '$money_spent'}}
      }
      
    ])
    console.log(foundRecords)
    return foundRecords
      
}