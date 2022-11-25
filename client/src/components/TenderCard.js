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

const TenderCard = () => {
  const [Price, setPrice] = useState(1000)

  const handleDecrement = () => {
    setPrice((prevCount) => prevCount - 100)
  }

  const handleIncrement = () => {
    setPrice((prevCount) => prevCount + 100)
  }

  return (
    <Box marginBottom={'3em'}>
      <Grid container spacing={3}>
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

              <Button size="small">ADD TO CART</Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gojo
              </Typography>
            </CardContent>
          </Card>
        </Grid>

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

              <Button size="small">ADD TO CART</Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gojo
              </Typography>
            </CardContent>
          </Card>
        </Grid>

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

              <Button size="small">ADD TO CART</Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gojo
              </Typography>
            </CardContent>
          </Card>
        </Grid>

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

              <Button size="small">ADD TO CART</Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gojo
              </Typography>
            </CardContent>
          </Card>
        </Grid>

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

              <Button size="small">ADD TO CART</Button>
            </CardActions>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gojo
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TenderCard
