const mongoose = require('mongoose')

const tenderSchema = mongoose.Schema(
  {
    productId: String,
    ownTenderId: { type: String },
    allTenders: {
      type: [
        {
          quantity: String,
          price: String,
          tenderCompanyId: String,
        },
      ],
      default: [],
    },
    finalTender: {
      type: [
        {
          quantity: String,
          price: String,
          tenderCompanyId: { type: String, unique: true },
        },
      ],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Tender', tenderSchema)
