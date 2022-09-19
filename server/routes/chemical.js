const express = require('express')
const { addChemical } = require('../controller/comapny')

const router = express.Router()

router.post('/newChemical', addChemical)

module.exports = router
