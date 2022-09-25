const Cart = require('../model/Cart')
const User = require('../model/User')

// addNewProduct
const addProducts = async (req, res) => {
  const addedProduct = await Cart({
    userId: req.body.userId,
    products: req.body.products,
  })
  try {
    const savedData = await addedProduct.save()
    const user = await User.findById(req.body.userId)
    user.currentOrder.push(savedData._id)
    res.status(200).json(savedData)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const displayCart = async (req, res) => {
  const { id } = req.params

  try {
    const data = await Cart.findOne({ userId: id })
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = {
  addProducts,
  displayCart,
}
