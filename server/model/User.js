const mongoose = require('mongoose')
// that want to buy stuffs

const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    companyName: String,
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
    previousBut: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PreviousBuy',
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', userSchema)
