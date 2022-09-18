const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: String,
    password: String,
    isSeller: {
      type: Boolean,
      default: false,
    },
    companyName: String,
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
