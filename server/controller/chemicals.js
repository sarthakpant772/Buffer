const Chemicals = require('../model/Chemicals')

const addChemicals = async (req, res) => {
  const data = await Chemicals({
    companyId: req.body.companyId,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    isTender: req.body.isTender,
  })
  try {
    const savedData = await data.save()
    res.status(201).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getAllChemicals = async (req, res) => {
  try {
    const data = await Chemicals.find({ isTender: 'true' })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getTenderChemicals = async (req, res) => {
  try {
    const data = await Chemicals.find({ isTender: 'false' })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  getAllChemicals,
  addChemicals,
  getTenderChemicals,
}
