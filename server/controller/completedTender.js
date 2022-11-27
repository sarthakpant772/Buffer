const CompletedTender = require('../model/CompletedTender')

const getCompletedTender = async (req, res) => {
  try {
    const data = await CompletedTender.find()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getCompletedById = async (req, res) => {
  const { id } = req.params
  try {
    const data = await CompletedTender.find({ companyId: id })
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = { getCompletedTender, getCompletedById }
