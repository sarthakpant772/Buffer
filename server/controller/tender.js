const { find } = require('../model/Tender')
const Tender = require('../model/Tender')
const argon2 = require('argon2')

const createTender = async (req, res) => {
  const data = await Tender({
    productId: req.body.productId,
    allTenders: req.body.allTenders,
  })

  try {
    const savedData = await data.save()
    res.status(201).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

const addTender = async (req, res) => {
  let price = parseInt(req.body.allTenders.price)
  price = 33333 * price
  price = price.toString()
  console.log(price)
  const { product_id } = req.params
  console.log(product_id)
  try {
    const savedData = await Tender.findOneAndUpdate(
      {
        productId: product_id,
      },
      {
        $push: {
          allTenders: {
            price: price,
            tenderCompanyId: req.body.allTenders.tenderCompanyId,
          },
        },
      },
    )
    res.status(200).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

const collectTender = async (req, res) => {
  const { productId } = req.params
  try {
    const datas = await Tender.find({ product_id: productId })
    let ma = -1
    const allTender = datas[0]
    // console.log(allTender)
    let finalCheck = 0

    for (let i = 0; i < datas[0].allTenders.length; i++) {
      if (parseInt(datas[0].allTenders[i].price) > ma) {
        ma = datas[0].allTenders[i].price
        finalCheck = i
      }
    }

    const finalData = await Tender.findOneAndUpdate(
      { product_id: productId },
      {
        finalTender: datas[0].allTenders[finalCheck],
      },
    )

    res.status(200).json(finalData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const getSelectedTender = async (req, res) => {
  const { productId } = req.params
  try {
    const data = await Tender.findOne({ productId: productId })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllTender = async (req, res) => {
  try {
    const data = await Tender.find()
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  createTender,
  collectTender,
  addTender,
  getSelectedTender,
  getAllTender,
}
