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

router.delete('/:id', deleteProduct)
module.exports = router
