const { find } = require('../model/Tender')
const Tender = require('../model/Tender')
const argon2 = require('argon2')
const Chemicals = require('../model/Chemicals')
const { connect } = require('mongoose')
const User = require('../model/User')
const CompletedTender = require('../model/CompletedTender')
const createTender = async (req, res) => {
  const data = await Tender({
    productId: req.body.productId,
    ownerId: req.body.companyId,
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
  // console.log(price)
  // console.log('ownerid', req.body.allTenders.tenderCompanyId)
  const { product_id } = req.params
  // console.log(product_id)
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
  // const companyId = res.body.companyId
  // console.log(productId)
  try {
    const datas = await Tender.find({ productId: productId })
    // console.log(datas)
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
      { productId: productId },
      {
        finalTender: datas[0].allTenders[finalCheck],
        isClosed: 'true',
      },
    )

    const data = await Chemicals.findOneAndUpdate(
      { _id: productId },
      {
        isSolved: 'true',
      },
    )
    const chemicalData = await Chemicals.findOne({
      _id: productId,
    })

    const userData = await User.find({
      _id: datas[0].allTenders[finalCheck].tenderCompanyId,
    })
    console.log(userData)
    console.log('data', userData[0].companyName)
    const collectedData = await CompletedTender({
      companyName: userData[0].companyName,
      companyId: datas[0].ownerId,
      name: chemicalData.name,
      quantity: chemicalData.quantity,
      grade: chemicalData.grade,
      AskedPrice: chemicalData.price,
      PriceGot: datas[0].allTenders[finalCheck].price,
    })

    const savedCollected = await collectedData.save()

    console.log('savedData', savedCollected)

    // console.log(data)
    res.status(200).json(finalData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const getSelectedTender = async (req, res) => {
  const { productId } = req.params
  try {
    const data = await Tender.findOne({
      productId: productId,
    })
    // console.log(data)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getTenderUsingCompany = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Tender.find({ ownerId: id, isClosed: 'true' })
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
  getTenderUsingCompany,
}
