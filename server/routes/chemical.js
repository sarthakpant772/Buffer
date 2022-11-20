const express = require('express')
const { getAllChemicals, addChemicals } = require('../controller/chemicals')

const router = express.Router()

router.get('/getAllChemical', getAllChemicals)

router.post('/addChemical', addChemicals)
module.exports = router
