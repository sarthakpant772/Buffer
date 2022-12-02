import { Box } from '@mui/system'
import React from 'react'
import vanshika from "../images/vanshika.jpg"
import aastha from "../images/aastha.jpg"
import Sarthak from "../images/Sarthak.jpg"
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
const Developers = () => {
  return (
    <Box justifyContent="space-evenly" flex={2} p={2} sx={{border:2}} color="#e0e0e0">
        <Typography fontFamily='revert-layer' textAlign={"center"} justifyContent={"centre"} gutterBottom variant="h4" component="div" >
          About Developers
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="space-between">
        <Card sx={{ maxWidth: 300 }} style={{backgroundColor:"#cfd8dc"}}>
      <CardMedia
        component="img"
        height="300"
        image={Sarthak}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sarthak
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bonjour!
          I am Sarthak Full-stack Developers . My expertise is area of 
          responsive design with every line of code i try to make the web
          a beautiful place.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" a href='mailto:9920103126@mail.jiit.ac.in'>Contact</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="300"
        image={aastha}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Aastha
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bonjour!
          I am Aastha front end Developers . My expertise is area of 
          responsive design with every line of code i try to make the web
          a beautiful place.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" a href='mailto:9920103139@mail.jiit.ac.in'>Contact</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 300 }} style={{backgroundColor:"#cfd8dc"}}>
      <CardMedia
        component="img"
        height="300"
        image={vanshika}
        alt="vanshika"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Vanshika
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Bonjour!
          I am Vanshika front end Developers . My expertise is area of 
          responsive design with every line of code i try to make the web
          a beautiful place.
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" a href='mailto:9920103122@mail.jiit.ac.in'>Contact</Button>
      </CardActions>
    </Card>
        </Stack>

    </Box>
  )
}

export default Developers
