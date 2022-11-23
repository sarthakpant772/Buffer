import { ThemeContext } from '@emotion/react'
import {
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
import { productDelete, removeItem } from '../features/cart/cartSlice'

const Cart = () => {
  var companyId = localStorage.getItem('companyId')
  const [data, setData] = useState()
  let getData = useSelector((state) => state.cart.cart)

  const dispatch = useDispatch()

  const handleBuy = async () => {
    const products = { getData }
    console.log(data)
    try {
      for (var i = 0; i < data.length; ++i) {
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
      }
      dispatch(removeItem)
    } catch (err) {
      console.log(err)
    } finally {
      const data = await axios.put('http://localhost:5000/cart/clearCart', {
        userId: companyId,
      })
      getData = data
    }
  }

  useEffect(() => {
    setData(getData.products)
  }, [getData])

  return (
    <div>
      {data &&
        data.map((item) => (
          <Card sx={{ maxWidth: 345 }} key={item._id}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => dispatch(productDelete({ item }))}
              >
                remove
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      <Button size="large" onClick={() => handleBuy()}>
        BUY
      </Button>
    </div>
  )
}

export default Cart
