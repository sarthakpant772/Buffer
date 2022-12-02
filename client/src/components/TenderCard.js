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

  const [Price, setPrice] = useState(parseInt(item.item.price))

  const handleDecrement = () => {
    setPrice((prevCount) => prevCount - 1000)
  }

  const handleIncrement = () => {
    setPrice((prevCount) => prevCount + 1000)
  }

  const makeTender = async () => {
    try {
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
          image={require(`../images/productImg/${item.item.name}.png`)}
          sx={{
            component: 'img',
            height: '16.875em',
            width: '17.625em',
            marginTop: '1em',
          }}
        ></CardMedia>

        <CardContent sx={{ width: '90%' }}>
          <Box
            sx={{
              width: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <Typography variant="subtitle1">Price:</Typography>
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
          </Box>
          <Box sx={{ width: '100%' }}>
            <Typography gutterBottom variant="h5" component="div">
              Item Grade : {item.item.grade}
            </Typography>
          </Box>
          <Typography gutterBottom variant="h5" component="div">
            {item.item.name}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            bottom: '0.07em',

            width: '100%',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <Button size="small" onClick={() => makeTender()}>
            Send Your Tender
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default TenderCard
