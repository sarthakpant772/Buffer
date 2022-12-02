

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import IMAGE from "../images/IMAGE.png"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, CardActions, CardContent, Collapse, Typography } from '@mui/material';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card sx={{ maxWidth: 500 }}>
     
      <CardMedia
        component="img"
        height="250"
        width="200"
        image={IMAGE}
        alt="Paella dish"
      />
      <br></br>
      <CardActions disableSpacing>
      <Typography sx={{ fontSize: 18}} color="gray" gutterBottom>
          Frequently Asked Questions?.
      </Typography>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
          Can someone apply for tender more than once ?
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="black" gutterBottom>
          No you can not.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
          How one will get to know about tender completion ?
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="black" gutterBottom>
          You will be receiving message through your mail id.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
          Is there any documentation required?
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="black" gutterBottom>
          Yess.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
          How much maximum time required for process completion?
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="black" gutterBottom>
          Depends completely on the Supplier Company . 
        </Typography>
      </CardContent>
    </Card>
        </CardContent>
      </Collapse>
    </Card>
   
  );
}