const express = require('express')
const {
  getCompletedTender,
  getCompletedById,
} = require('../controller/completedTender')
const router = express.Router()
router.get('/getCollectedTender', getCompletedTender)
router.get('/getById/:id', getCompletedById)
module.exports = router
