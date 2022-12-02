const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
  userId: { type: String, unique: true },
  products: [
    {
      type: {
        name: { type: String },
        quantity: String,
        price: String,
        companyName: String,
      },
      default: [],
    },
    { timestamps: true },
  ],
  totalCost: { type: String, default: '0' },
})

module.exports = mongoose.model('Cart', cartSchema)
