const express = require('express')
const {
  getAllChemicals,
  addChemicals,
  getTenderChemicals,
} = require('../controller/chemicals')

const router = express.Router()

router.get('/getAllChemical', getAllChemicals)
router.get('/getTenderData', getTenderChemicals)
router.post('/addChemical', addChemicals)
module.exports = router
