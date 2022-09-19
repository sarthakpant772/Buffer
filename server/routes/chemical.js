const express = require('express')
const { addChemical, addNewChemical } = require('../controller/comapny')

const router = express.Router()

router.post('/addChemical', addChemical)
// add chemical is main
router.put('/addNewChemical', addNewChemical)

module.exports = router
