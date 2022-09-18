const express = require('express')
const { registerUser } = require('../controller/auth')
const User = require('../model/User')

const router = express.Router()

router.post('/register', registerUser)

module.exports = router;