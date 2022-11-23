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
import { productAdd, productDelete } from '../features/cart/cartSlice'

const PreviousBuy = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const check = useSelector((state) => state.previousBuy.products)

  useEffect(() => {
    setData(check)
    console.log(check)
  }, [check])
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
                onClick={() => dispatch(productAdd({ item }))}
              >
                Buy Again
              </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
    </div>
  )
}

export default PreviousBuy
