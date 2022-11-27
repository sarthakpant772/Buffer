const { instance } = require('../index')

const checkout = async (req, res) => {
  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: 'INR',
    receipt: 'order_rcptid_11',
  }
  const order = instance.orders.create(options)
  console.log(order)
  res.status(200).json(order)
}

module.exports = { checkout }
