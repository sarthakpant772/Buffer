const express = require('express')
const {
  addTender,
  createTender,
  collectTender,
  getSelectedTender,
  getAllTender,
} = require('../controller/tender')
const { verifyBuyer } = require('../middleware/verifyBuyer')

const router = express.Router()

router.put('/addTender/:product_id', verifyBuyer, addTender)
router.post('/createTender', createTender)
router.get('/collectTender/:product_id', collectTender)
router.get('/getTenderData/:productId', getSelectedTender)
router.get('/getTenderData', getAllTender)

module.exports = router
