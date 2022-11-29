import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, productAdd } from '../features/cart/cartSlice'

const Productlist = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/chemical/getAllChemical')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

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
                Add to cart
              </Button>
              <Button size="small">{item.price}</Button>
            </CardActions>
          </Card>
        ))}
    </div>
  )
}

export default Productlist
