const { default: mongoose } = require('mongoose')
const { findByIdAndUpdate, findOneAndUpdate } = require('../model/Cart')
const Cart = require('../model/Cart')
const User = require('../model/User')

// addNewProduct
const addNewProducts = async (req, res) => {
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

const addProducts = async (req, res) => {
  const id = req.body.userId
  console.log(req.body.products.price)
  try {
    const Cdata = await Cart.findOne({ userId: id })
    const data = await Cart.findOneAndUpdate(
      { userId: req.body.userId },
      {
        $push: {
          products: req.body.products,
        },
        totalCost:
          parseInt(Cdata.totalCost) + parseInt(req.body.products.price),
      },
    )
    res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

const deleteProduct = async (req, res) => {
  const userId = req.body.userId
  const { id } = req.params

  try {
    const Cdata = await Cart.findOne({ userId: userId })

    const data = await Cart.findOneAndUpdate(
      { userId: userId },
      {
        $pull: {
          products: {
            _id: id,
          },
        },
        totalCost:
          parseInt(Cdata.totalCost) - parseInt(req.body.products.price),
      },
      { safe: true, multi: false },
    )
    const dataFinal = await Cart.findOne({ userId: userId })
    res.status(200).json(dataFinal)
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
    res.status(500).json(err)
  }
}

const clearCart = async (req, res) => {
  try {
    const userId = req.body.userId
    const data = await Cart.findOneAndUpdate(
      { userId: userId },
      {
        products: [],
      },
      { safe: true, multi: false },
    )
    const dataFinal = await Cart.findOne({ userId: userId })
    res.status(200).json(dataFinal)
  } catch (err) {
    console.log(err)
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = {
  addNewProducts,
  displayCart,
  addProducts,
  deleteProduct,
  clearCart,
}
