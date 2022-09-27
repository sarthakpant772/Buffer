const express = require('express')
const { createPreviousBuy, addChemical } = require('../controller/previousBuy')

const router = express.Router()

router.post('/createPreviousBuy', createPreviousBuy)
router.put('/addChemical', addChemical)

module.exports = router
