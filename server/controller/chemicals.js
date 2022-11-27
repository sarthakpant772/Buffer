const Chemicals = require('../model/Chemicals')

const addChemicals = async (req, res) => {
  const data = await Chemicals({
    companyId: req.body.companyId,
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    grade: req.body.grade,
    isTender: req.body.isTender,
  })
  try {
    const savedData = await data.save()
    res.status(201).json(savedData)
  } catch (err) {
    res.status(500).json(err)
  }
}

// get all chemicals
const getAllChemicals = async (req, res) => {
  try {
    const data = await Chemicals.find({ isTender: 'false' })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getSpecificCompanyChemiacl = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Chemicals.find({
      companyId: id,
      isTender: 'true',
      isSolved: 'false',
    })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const getTenderChemicals = async (req, res) => {
  try {
    const data = await Chemicals.find({ isTender: 'true', isSolved: 'false' })
    console.log(data)
    // check and relod data
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

const getProductChemical = async (req, res) => {
  const { id } = req.params
  try {
    const data = await Chemicals.findById(id)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getAllChemicals,
  addChemicals,
  getTenderChemicals,
  getSpecificCompanyChemiacl,
  getProductChemical,
}
