const mongoose = require('mongoose')

const previousBuySchema = mongoose.Schema({
  userid: { type: String, reqired: true, unique: true },
  products: [
    {
      name: { type: String },
      quantity: { type: String, default: 0 },
      price: { type: String, default: 0 },
    },
  ],
  totalCost: { type: Number, default: 0 },
})

module.exports = mongoose.model('PreviousBuy', previousBuySchema)
