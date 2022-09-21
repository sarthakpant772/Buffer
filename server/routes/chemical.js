const express = require('express')
const {
  addChemical,
  addNewChemical,
  getAllChemical,
  getChemicalOfOneCompany,
} = require('../controller/comapny')

const router = express.Router()

router.post('/addChemical', addChemical)
// add chemical is main
router.put('/addNewChemical', addNewChemical)

router.get('/getAllChemical', getAllChemical)

router.get('/getComapnyChemical/:id', getChemicalOfOneCompany)
module.exports = router
