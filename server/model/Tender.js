const mongoose = require('mongoose')

const tenderSchema = mongoose.Schema(
  {
    productId: String,
    ownerId: { type: String },
    isClosed: { type: String, default: 'false' },
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
