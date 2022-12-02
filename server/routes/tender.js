const express = require('express')
const { getTenderChemicals } = require('../controller/chemicals')
const {
  addTender,
  createTender,
  collectTender,
  getSelectedTender,
  getAllTender,
  getTenderUsingCompany,
} = require('../controller/tender')
const { verifyBuyer } = require('../middleware/verifyBuyer')

const router = express.Router()

router.put('/addTender/:product_id', verifyBuyer, addTender)
router.post('/createTender', createTender)
router.get('/collectTender/:productId', collectTender)
router.get('/getTenderData/:productId', getSelectedTender)
router.get('/getTenderData', getAllTender)
router.get('/getCompletedTender/:id', getTenderUsingCompany)

module.exports = router

// get selected tender
