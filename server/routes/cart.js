const express = require('express')
const { addProducts, displayCart } = require('../controller/cart')
const router = express.Router()

router.post('/addProduct', addProducts)
router.get('/:id', displayCart)

module.exports = router
