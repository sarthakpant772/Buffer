const mongoose = require('mongoose')
// that want to sell stuff
const CompanyDetailsSchema = mongoose.Schema({
  companyRegisteredId: {
    type: String,
    required: true,
  },
  chemicalSelling: [
    {
      chemicalName: { type: String, required: true },
      quatity: Number,
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
