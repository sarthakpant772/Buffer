require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()



app.use(express.json())

app.use(express.json({ limit: '64mb' }))

app.use(cors())

// routes

const authRoute = require('./routes/auth')
app.use('/user', authRoute)

const company = require('./routes/company')
app.use('/industry', company)

const user = require('./routes/user')
app.use('/getUser', user)

const previousBuy = require('./routes/previousBuy')
app.use('/previousBuy', previousBuy)

const cart = require('./routes/cart')
app.use('/cart', cart)

const tender = require('./routes/tender')
app.use('/tender', tender)

const chemical = require('./routes/chemical')
app.use('/chemical', chemical)

const CollectedTender = require('./routes/CompletedTender')
app.use('/completed', CollectedTender)

const Payment = require('./routes/payment')
app.use('/payment', Payment)

const PORT = process.env.PORT || 5000
const MONGO_URL =
  'mongodb+srv://buffer:buffer@cluster0.o7wpovx.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('bufferCommands', true)
mongoose.connect(MONGO_URL, () => {
  console.log('databse connected')
  app.listen(PORT, () => {
    console.log('server is running at port 5000')
  })
})




