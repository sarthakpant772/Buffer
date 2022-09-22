const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// that want to sell stuff
const CompanyDetailsSchema = mongoose.Schema({
  // companyDetails: User,
  companyRegisteredId: {
    type: String,
    required: true,
  },
  chemicalSelling: [
    {
      chemicalName: { type: String, required: true, unique: true },
      quantity: { type: Number, required: true },
      pricePerGM: Number,
      Grade: {
        type: String,
        default: 'A',
      },
      rating: {
        type: Number,
        default: 10,
      },
    },
  ],
})
CompanyDetailsSchema.plugin(uniqueValidator)

module.exports = mongoose.model('CompanyDetails', CompanyDetailsSchema)
