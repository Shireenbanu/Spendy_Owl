const mongoose = require('mongoose')

const yourSchema = new mongoose.Schema({
    thread_id: { type: String },
    email_subject: { type: String },
    spent_date: { type: Date},
    money_spent: { type: Number},
    category: {type: String}
  });

  const spendDetail = mongoose.model("spend_detail",yourSchema);

  module.exports = spendDetail