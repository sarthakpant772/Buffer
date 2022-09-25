const mongoose = require('mongoose')

// that want to sell stuff
const CompanyDetailsSchema = mongoose.Schema({
  // companyDetails: User,
  companyRegisteredId: {
    type: String,
    required: true,
  },
  chemicalSelling: [
    {
      chemicalName: { type: String, required: true, unique: false },
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

module.exports = mongoose.model('CompanyDetails', CompanyDetailsSchema)
