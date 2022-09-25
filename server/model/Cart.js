const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  userId: { type: String, unique: true },
  products: [
    {
      name: { type: String, unique: true },
      quantity: String,
      price: String,
      companyName: String,
    },
    { timestamps: true },
  ],
})

module.exports = mongoose.model('Cart', cartSchema)
