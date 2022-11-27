const mongoose = require('mongoose')
// that want to buy stuffs

const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    companyName: { type: String, default: '' },
    isSeller: {
      type: Boolean,
      default: false,
    },
    phoneNumber: String,
    acType: {
      type: String,
      enum: ['SELLER', 'BUYER'],
      default: 'BUYER',
    },
    previousBuy: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'PreviousBuy',
      default: [],
    },
    currentOrder: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Cart',
      default: [],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', userSchema)
