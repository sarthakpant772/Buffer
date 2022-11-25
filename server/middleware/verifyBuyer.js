const Tender = require('../model/Tender')

const verifyBuyer = async (req, res, next) => {
  const id = req.body.allTenders.tenderCompanyId
  const { product_id } = req.params
  try {
    const data = await Tender.findOne({ productId: product_id })
    // console.log(data.allTenders)
    for (d in data.allTenders) {
      if (id == data.allTenders[d].tenderCompanyId) {
        return res.status(401).send('err')
      }
    }
    next()
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { verifyBuyer }
