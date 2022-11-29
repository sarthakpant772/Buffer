const mongoose = require('mongoose')

const chemicalSchema = mongoose.Schema({
  companyId: { type: String },
  name: { type: String, unique: true },
  quantity: String,
  grade: String,
  price: { type: String, default: 0 },
  isTender: { type: String, default: 'false' },
  isSolved: { type: String, default: 'false' },
})

module.exports = mongoose.model('Chemicals', chemicalSchema)
