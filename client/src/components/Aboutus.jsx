import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';
import Developers from './Developers';
export default function Aboutus() {
  return (
    <div>
    <Box justifyContent="centre" flex={6} p={1}>
    <Stack direction="row" spacing={1} justifyContent="space-between">
    <Box   p={7} sx={{display:{ xs:"none", sm:"block"}}}></Box>
    <Card sx={{ minWidth:600 }} justifyContent="centre" style={{backgroundColor:"gray"}}>
      <CardContent>
        <Typography sx={{ fontSize: 50 }} color="white" gutterBottom  textAlign={"center"}>
          ABOUT US
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white" fontFamily={"roboto"} textAlign={"center"}>
          VISION
        </Typography>
        <Typography variant="body2" color="whitesmoke">
        Industries making chemicals from raw materials contact middlemen for selling their products and
         middlemen cut a huge amount of money in between selling the product to outer industry. 
         Industry hires trucks to deliver their goods at cheaper prices than usual. Here both the industries 
         suffer as the one who is selling chemicals has to find truckers/exporters and the one who is buying
         cannot keep any track of where their goods have reached. Here we are trying to solve it by giving truckers 
         a platform where they can bid for the goods that they want to travel with, by industries will get an affordable 
         rate of transportation and truckers can be happy with what they travel with.<CardActions>
        <Button size="small">Learn More</Button>
        </CardActions>
        </Typography>
      </CardContent>
      <Card>
      <br></br>
      <br></br>
      <Developers/></Card>
    </Card>
    <Box p={7} sx={{display:{ xs:"none", sm:"block"}}}></Box>
    </Stack>
    </Box>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>    
  );
}
