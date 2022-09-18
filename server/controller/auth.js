const User = require('../model/User')

const registerUser = async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    companyName: req.body.companyName,
    phoneNumber: req.body.phoneNumber,
  })
  try {
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

module.exports = { registerUser }
