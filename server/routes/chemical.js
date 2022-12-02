const express = require('express')
const {
  getAllChemicals,
  addChemicals,
  getTenderChemicals,
  getSpecificCompanyChemiacl,
  getProductChemical,
} = require('../controller/chemicals')

const router = express.Router()

router.get('/getAllChemical', getAllChemicals)
router.get('/getTenderData', getTenderChemicals)
router.post('/addChemical', addChemicals)
router.get('/getSpecificChemical/:id', getSpecificCompanyChemiacl)
router.get('/getSpecificProduct/:id', getProductChemical)
module.exports = router
