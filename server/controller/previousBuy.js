const { findById } = require('../model/PreviousBuy')
const PreviousBuy = require('../model/PreviousBuy')
const User = require('../model/User')
const createPreviousBuy = async (req, res) => {
  const data = await PreviousBuy({
    userid: req.body.userid,
    products: req.body.products,
    totalCost: req.body.totalCost,
  })
  try {
    const savedData = await data.save()
    const user = await User.findById(req.body.userid)
    user.previousBuy.push(savedData._id)
    await user.save()
    res.status(200).json(savedData)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const addChemical = async (req, res) => {
  try {
    console.log('check add po chemical')
    const data = await PreviousBuy.findOneAndUpdate(
      { userid: req.body.userid },
      {
        $push: {
          products: req.body.products,
        },
        totalCost: req.body.totalCost,
      },
    )
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const getPreviousChemicals = async (req, res) => {
  try {
    const { id } = req.params

    const data = await PreviousBuy.findOne({ userid: id })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { createPreviousBuy, addChemical, getPreviousChemicals }
