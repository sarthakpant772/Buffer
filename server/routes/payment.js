const express = require('express')
const {
  createOrder,
  paymentCallBack,
  getLogo,
  checkout,
} = require('../controller/payment')
const router = express.Router()

router.post('/razorpay/:id', checkout)

module.exports = router
