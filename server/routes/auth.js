const express = require('express')
const { registerUser, loginUser, getUserById } = require('../controller/auth')
const User = require('../model/User')

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/user/:id', getUserById)
module.exports = router
