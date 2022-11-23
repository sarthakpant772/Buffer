const express = require('express')
const {
  createPreviousBuy,
  addChemical,
  getPreviousChemicals,
} = require('../controller/previousBuy')

const router = express.Router()

router.post('/createPreviousBuy', createPreviousBuy)
router.put('/addChemical', addChemical)
router.get('/getPreviousChemical/:id', getPreviousChemicals)
module.exports = router
