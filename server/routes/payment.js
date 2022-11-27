const express = require('express')
const {
  createOrder,
  paymentCallBack,
  getLogo,
  checkout,
} = require('../controller/payment')
const router = express.Router()

router.route('/checkout').post(checkout)
module.exports = router
