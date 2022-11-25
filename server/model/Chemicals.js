const mongoose = require('mongoose')

const chemicalSchema = mongoose.Schema({
  companyId: { type: String },
  name: { type: String, unique: true },
  quantity: String,
  price: String,
  isTender: { type: String, default: false },
})

module.exports = mongoose.model('Chemicals', chemicalSchema)
