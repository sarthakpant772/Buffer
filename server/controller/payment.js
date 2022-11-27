require('dotenv').config()
const Razorpay = require('razorpay')
const shortid = require('shortid')
const Cart = require('../model/Cart')
const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
})

const checkout = async (req, res) => {
  const { id } = req.params

  const data = await Cart.findOne({ userId: id })
  // console.log(data)
  const payment_capture = 1
  const amount = data.totalCost
  const currency = 'INR'

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  }

  try {
    const response = await razorpay.orders.create(options)
    // console.log(response)
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { checkout }
