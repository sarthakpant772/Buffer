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

const TenderCard = (item) => {
  const navigate = useNavigate()
  console.log(item.item.price)
  const [Price, setPrice] = useState(parseInt(item.item.price))

  const handleDecrement = () => {
    setPrice((prevCount) => prevCount - 100)
  }

  const handleIncrement = () => {
    setPrice((prevCount) => prevCount + 100)
  }

  const makeTender = async () => {
    try {
      console.log(item.item._id)
      var companyId = localStorage.getItem('companyId')

      const data = await axios.put(
        `http://localhost:5000/tender/addTender/${item.item._id}`,
        {
          allTenders: {
            name: item.item.name,
            price: Price.toString(),
            tenderCompanyId: companyId,
          },
        },
      )
      // console.log(data)
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
          marginTop: '10em',
          alignItems: 'center',
        }}
      >
        <CardMedia
          image={img1}
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
          }}
        >
          <IconButton
            aria-label="delete"
            aria-color="secondary"
            onClick={handleDecrement}
          >
            <RemoveCircleIcon />
          </IconButton>

          <div className="form-control text -center">{Price}</div>
          <IconButton
            aria-label="delete"
            aria-color="primary"
            onClick={handleIncrement}
          >
            <AddCircleIcon />
          </IconButton>

          <Button size="small" onClick={() => makeTender()}>
            ADD TO CART
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

export default TenderCard
