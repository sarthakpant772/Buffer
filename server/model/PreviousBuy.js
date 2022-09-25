const mongoose = require('mongoose')

const previousBuySchema = mongoose.Schema({
  userid: { type: String, reqired: true, unique: true },
  products: [
    {
      productName: { type: String, reqired: true },
      productQuantity: { type: Number, default: 0 },
      productPrice: { type: Number, default: 0 },
    },
  ],
  totalCost: { type: Number, default: 0 },
})

module.exports = mongoose.model('PreviousBuy', previousBuySchema)
