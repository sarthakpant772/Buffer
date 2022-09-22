const mongoose = require('mongoose')
// that want to buy stuffs
const uniqueValidator = require('mongoose-unique-validator')
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
  },
  { timestamps: true },
)
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
