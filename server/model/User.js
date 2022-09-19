const mongoose = require('mongoose')
// that want to buy stuffs
const userSchema = mongoose.Schema(
  {
    email: String,
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
  },
  { timestamps: true },
)

module.exports = mongoose.model('User', userSchema)
