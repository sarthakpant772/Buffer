const express = require('express')
const {
  addProducts,
  displayCart,
  addNewProducts,
  deleteProduct,
} = require('../controller/cart')
const router = express.Router()
// post
router.post('/addNewProduct', addNewProducts)
// put
router.put('/addProducts', addProducts)

router.get('/:id', displayCart)

router.put('/:id', deleteProduct)
module.exports = router
