const CompanyDetails = require('../model/CompanyDetails')

const addChemical = async (req, res) => {
  const chemicalSellings = {
    chemicalName: req.body.chemicalSelling.chemicalName,
    quantity: req.body.chemicalSelling.quantity,
    pricePerGM: req.body.chemicalSelling.pricePerGM,
    Grade: req.body.chemicalSelling.Grade,
  }
  const newChemical = await CompanyDetails({
    companyRegisteredId: req.body.companyRegisteredId,
    chemicalSelling: [chemicalSellings],
  })
  try {
    const savedChemical = await newChemical.save()
    res.status(201).json(savedChemical)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { addChemical }
