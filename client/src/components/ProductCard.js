import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Input,
  Paper,
  TextField,
  Typography,
} from '@mui/material'

import React, { useState } from 'react'
import img1 from '../images/1.png'
import { margin } from '@mui/system'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductCard = (item) => {
  const navigate = useNavigate()
  // console.log(item.item.price)
  const [Price, setPrice] = useState(parseInt(item.item.price))

  const makeTender = async () => {
    try {
      console.log(item.item._id)
      var companyId = localStorage.getItem('companyId')

      const data = await axios.get(
        `http://localhost:5000/tender/collectTender/${item.item._id}`,
        {
          companyId: companyId,
        },
      )
      console.log(data)
    } catch (err) {
      if (err.response.data === 'err') {
        alert('Already Applied to this porduct')
      }
      console.log(err)
    } finally {
      navigate('/')
    }
  }

  return (
    <Grid item xs={4}>
      <Card
        sx={{
          display: 'flex',
          height: '24.375em',
          width: '20.625em',
          flexDirection: 'column',
          margin: 'auto',
          // marginTop: '10em',
          alignItems: 'center',
        }}
      >
        <CardMedia
          image={require(`../images/productImg/${item.item.name}.png`)}
          sx={{
            component: 'img',
            height: '16.875em',
            width: '17.625em',
            marginTop: '1em',
          }}
        ></CardMedia>

        <CardActions
          sx={{
            bottom: '0.07em',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <div className="form-control text -center">Price:{Price}</div>

          <Button size="small" onClick={() => makeTender()}>
            collect Tender
          </Button>
        </CardActions>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.item.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ProductCard
