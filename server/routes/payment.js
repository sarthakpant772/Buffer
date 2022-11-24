const express = require('express')
const {
  createOrder,
  paymentCallBack,
  getLogo,
} = require('../controller/payment')
const router = express.Router()
router.route('/checkout').post(checkout)

router.route('/paymentverification').post(paymentVerification)
module.exports = router
