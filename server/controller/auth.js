const User = require('../model/User')
const argon2 = require('argon2')

const jwt = require('jsonwebtoken')
const { use } = require('../routes/auth')
const Cart = require('../model/Cart')
const PreviousBuy = require('../model/PreviousBuy')

const registerUser = async (req, res) => {
  password = req.body.password
  password = await argon2.hash(password)
  const newUser = new User({
    email: req.body.email,
    password: password,
    userName: req.body.companyName,
    phoneNumber: req.body.phoneNumber,
    acType: req.body.acType,
  })
  try {
    const savedUser = await newUser.save()
    const addedProduct = await Cart({
      userId: savedUser._id,
    })
    const createPreaviousBuy = await PreviousBuy({
      userid: savedUser._id,
    })
    const savedData = await addedProduct.save()
    const savedPreviousBuy = await createPreaviousBuy.save()
    console.log(savedPreviousBuy)
    const user = await User.findById(savedUser._id)
    user.currentOrder.push(savedData._id)
    res.status(201).json(savedUser)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const loginUser = async (req, res) => {
  const body = req.body
  const email = body?.email
  const password = body?.password
  try {
    const checkUser = await User.findOne({ email: email })
    const password_hash = checkUser?.password
    if (await argon2.verify(password_hash, password)) {
      res.status(200).json(checkUser)
    } else {
      res.status(403).json({ text: 'password not correct' })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

// const getSelectedUser = async(req )

module.exports = { registerUser, loginUser }
