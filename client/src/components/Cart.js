import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDelete } from '../features/cart/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState()
  const getData = useSelector((state) => state.cart.cart)

  useEffect(() => {
    console.log(getData.products)
    setData(getData.products)
  }, [getData])

  console.log('check', data)
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
    </div>
  )
}

export default Cart
