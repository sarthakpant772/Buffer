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

const registerCompany = async (req, res) => {}

module.exports = { registerUser }
