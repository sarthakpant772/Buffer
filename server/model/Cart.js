const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  userId: { type: String, unique: true },
  products: [
    {
      type: {
        name: { type: String, unique: true },
        quantity: String,
        price: String,
        companyName: String,
      },
      default: [],
    },
    { timestamps: true },
  ],
})

module.exports = mongoose.model('Cart', cartSchema)
