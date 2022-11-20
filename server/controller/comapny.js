const { findOne } = require('../model/CompanyDetails')
const CompanyDetails = require('../model/CompanyDetails')

// first call add chemical at the start of resitration then call addnewChemical when he want to add more chemicals

const addChemical = async (req, res) => {
  // const chemicalSellings = await {}

  const newChemical = await CompanyDetails({
    companyRegisteredId: req.body.companyRegisteredId,
    chemicalSelling: [
      {
        chemicalName: req.body.chemicalSelling.chemicalName,
        quantity: req.body.chemicalSelling.quantity,
        pricePerGM: req.body.chemicalSelling.pricePerGM,
        Grade: req.body.chemicalSelling.Grade,
      },
    ],
  })
  try {
    const savedChemical = await newChemical.save()
    res.status(201).json(savedChemical)
  } catch (error) {
    res.status(500).json(error)
  }
}

// addNewchemical is main

const addNewChemical = async (req, res) => {
  try {
    const addedChemical = await CompanyDetails.findOneAndUpdate(
      { companyRegisteredId: req.body.companyRegisteredId },
      {
        $push: {
          chemicalSelling: [
            {
              chemicalName: req.body.chemicalSelling.chemicalName,
              quantity: req.body.chemicalSelling.quantity,
              pricePerGM: req.body.chemicalSelling.pricePerGM,
              Grade: req.body.chemicalSelling.Grade,
            },
          ],
        },
      },
    )
    res.status(200).json(addedChemical)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getAllChemical = async (req, res) => {
  try {
    const allChemical = await CompanyDetails.find()
    
    res.status(200).json(allChemical)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getChemicalOfOneCompany = async (req, res) => {
  const { id } = req.params
  // console.log(id)
  try {
    const chemicals = await CompanyDetails.findOne({
      companyRegisteredId: id,
    })
    res.status(200).json(chemicals)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = {
  addNewChemical,
  addChemical,
  getAllChemical,
  getChemicalOfOneCompany,
}
