const express = require('express')
const {
  addTender,
  createTender,
  collectTender,
  getSelectedTender,
} = require('../controller/tender')

const router = express.Router()

router.put('/addTender/:product_id', addTender)
router.post('/createTender', createTender)
router.get('/collectTender/:product_id', collectTender)
router.get('/getTenderData/:productId', getSelectedTender)
module.exports = router
