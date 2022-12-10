const mongoose = require('mongoose')



const yourSchema = new mongoose.Schema({
    group_key : {type: String},
    key : { type: String },
    value: { type: String },
  });

  const spendyOwlConstant = mongoose.model("spendy_owl_constant",yourSchema);

  module.exports = spendyOwlConstant