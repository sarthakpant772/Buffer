const User = require('../model/User')

const registerUser = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    userName: req.body.companyName,
    phoneNumber: req.body.phoneNumber,
    acType: req.body.acType,
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

const loginUser = async (req, res) => {
  const body = req.body
  const email = body?.email
  const password = body?.password
  try {
    const checkUser = await User.findOne({ email: email })
    if (checkUser.password === password) {
      res.status(200).json(checkUser)
    } else {
      res.status(401).json({ text: 'password not correct' })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

module.exports = { registerUser, loginUser }
