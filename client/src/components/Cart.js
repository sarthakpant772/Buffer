import { ThemeContext } from '@emotion/react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { productDelete, removeItem } from '../features/cart/cartSlice'
import LoadingPage from './LoadingPage'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

const Cart = () => {
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  var companyId = localStorage.getItem('companyId')
  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?')
      return
    }

    const data = await fetch(
      `http://localhost:5000/payment/razorpay/${companyId}`,
      {
        method: 'POST',
      },
    ).then((t) => t.json())

    console.log(data)

    const options = {
      key: 'rzp_test_LIBykHmf9U826c',
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: 'Buffer',
      description: 'Thank you for nothing. Please give us some money',
      image:
        'https://imgs.search.brave.com/nnernw_s4TZNL9KCtjSc6I91juOVcsmFT4juxisRvxM/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/Mk0wWnppbVBKVFZ1/VEFKakhlOHFRSGFK/NCZwaWQ9QXBp',
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: 'sarthak pant',
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const [data, setData] = useState()
  const getData = useSelector((state) => state.cart.cart)

  const dispatch = useDispatch()

  const handleBuy = async () => {
    const products = { getData }
    try {
      for (var i = 0; i < data.length; ++i) {
        console.log('data', data[i])
        const previous = await axios.put(
          'http://localhost:5000/previousBuy/addChemical',
          {
            userid: companyId,
            products: {
              name: data[i].name,
              price: data[i].price,
              quantity: data[i].quantity,
            },
          },
        )
        console.log('previous', previous)
      }
    } catch (err) {
      console.log(err)
    } finally {
      displayRazorpay()

      setTimeout(async () => {
        dispatch(removeItem)
        const datas = await axios.put('http://localhost:5000/cart/clearCart', {
          userId: companyId,
        })
        setData(datas)
        alert('Order Placed')
        navigate('/')
      }, '10000')
    }
  }

  const getAllData = async () => {
    var companyId = localStorage.getItem('companyId')
    const responce = await axios.get(`http://localhost:5000/cart/${companyId}`)
    setData(responce)
  }

  useEffect(() => {
    // window.location.reload()
    console.log(getData)

    setData(getData.products)
    if (getData.totalCost !== '0') {
      setLoading(false)
    } else {
      setLoading(true)
    }
    // getAllData()
  }, [data, getData])
  const price = useSelector((state) => state.cart.totalCost)

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          minHeight: '80vh',
          display: 'flex',
          marginTop: '2em',
        }}
      >
        <Box sx={{ width: '70%' }}>
          {data &&
            data.map((item) => (
              <Card
                sx={{
                  width: '90%',
                  marginBottom: '3em',
                  display: 'flex',
                  minHeight: '15em',
                }}
                key={item._id}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: '30%',
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={require(`../images/productImg/${item.name}.png`)}
                  />
                </Box>
                <Box>
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="div">
                      Item Name : {item.name}
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                      Item Grade : {item.grade}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Thanks for shopping
                    </Typography>
                  </CardContent>
                  <Box>
                    <CardActions>
                      <Button
                        size="large"
                        onClick={() => dispatch(productDelete({ item }))}
                      >
                        remove
                      </Button>
                      <Button size="large">add more</Button>
                    </CardActions>
                  </Box>
                </Box>
              </Card>
            ))}

          {loading && <LoadingPage />}
        </Box>
        <Box
          sx={{
            borderLeftWidth: '4px',
            borderColor: 'black',
            height: '35em',
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              height: '30em',
              width: '90%',
              marginTop: '1em',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box>
              <Typography variant="h3">Complete Your order</Typography>
              <hr></hr>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h2">Total Cost:</Typography>
              <Typography variant="h4">+{price}</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h2">Total Tax:</Typography>
              <Typography variant="h4">+33</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h2">Total Discount:</Typography>
              <Typography variant="h4">-33</Typography>
            </Box>
            <hr />
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h2">Final Price:</Typography>
              <Typography variant="h4">{price !== 0 ? price : 0}</Typography>
            </Box>
          </Box>
          <Button size="large" onClick={() => handleBuy()}>
            BUY
          </Button>
        </Box>
      </Box>
    </div>
  )
}

export default Cart
