const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ limit: '64mb' }))
app.use(cors())

// routes

const authRoute = require('./routes/auth')
app.use('/user', authRoute)

const chemical = require('./routes/chemical')
app.use('/industry', chemical)

const PORT = process.env.PORT || 5000
const MONGO_URL =
  'mongodb+srv://buffer:buffer@cluster0.o7wpovx.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('bufferCommands', false)
mongoose.connect(MONGO_URL, () => {
  console.log('databse connected')
  app.listen(PORT, () => {
    console.log('server is running at port 5000')
  })
})
