const mongoose = require('mongoose')

const completedTenderSchema = mongoose.Schema({
  companyName: { type: String },
  companyId: { type: String },
  name: { type: String },
  quantity: String,
  grade: String,
  AskedPrice: String,
  PriceGot: { type: String, default: 'false' },
})

module.exports = mongoose.model('CompletedTender', completedTenderSchema)
