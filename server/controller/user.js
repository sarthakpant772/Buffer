const PreviousBuy = require('../model/PreviousBuy')
const User = require('../model/User')

const getUser = async (req, res) => {
  const { id } = req.params
  try {
    const data = await User.findById(id).populate('previousBut')
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
}

module.exports = {
  getUser,
}
