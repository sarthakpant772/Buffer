import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack } from '@mui/system';
import { List, ListItem } from '@mui/material';
import Sidebar from './Sidebar';
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
    <Box>
    <Box justifyContent="centre" flex={6} p={1} marginLeft="15em">
    <Stack direction="row" spacing={1} justifyContent="space-between">
    <Card  sx={{ minWidth: 500, maxWidth:950 ,justifyContent:"center" }} textAlign="center" style={{backgroundColor:"white"}}>
      <CardContent>
      <Typography sx={{ fontSize: 50 }} color="gray" gutterBottom  textAlign={"center"}>
          All About Tender Process
        </Typography>
        <Typography variant="body2" fontSize={18} color="text.secondary">
        Open to all organisations to submit a tender. On large projects, this may involve a
        pre-qualification process that results in a list of suitable suppliers who will be
        invited to tender. This open approach usually results in a large number of responses 
        of varying suitability , Enables Buyer company to lodge the tender for the degraded material
        for once to concede the profit making strategy with end to end encryption to allow data 
        privacy as well. The transportation and convenience  allow better options at a single 
        place and live tracking of their product . 

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Typography sx={{ fontSize: 18}} color="skyblue" gutterBottom>
          {'READ MORE>>'}
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
          <Typography paragraph color="#00acc1">Implementation</Typography>
          <Typography paragraph>
            Once you’ve found the perfect bid for your business, send it our way.
            Our website can take care of the whole thing for you , even
            submit it on your behalf.
            They’ll let you know what they need from you, providing you with a full
             documents.
          </Typography>
          <Typography paragraph color="#00acc1">Tender Ready</Typography>
          <List sx = {{ listStyleType: 'disc', pl: 2,'& .MuiListItem-root': {display: 'list-item'}}}>
            <ListItem>A account login to one Buffer.</ListItem>
            <ListItem>Account Verification</ListItem>
            </List>
            <Typography paragraph color="#00acc1">Procedure</Typography>
          <List sx = {{ listStyleType: 'disc', pl: 2,'& .MuiListItem-root': {display: 'list-item'}}}>
            <ListItem>Register or Login with the credentials required.</ListItem>
            <ListItem>Verify your account with GST No.</ListItem>
            <ListItem>Take The Subscription</ListItem>
            <ListItem>Look For the seller company Biding for the degraded material</ListItem>
            <ListItem>Present your Tender Proposal</ListItem>
            </List>
        </CardContent>
      </Collapse>
    </Card>
    <Box sx={{display:{ xs:"none", sm:"block"}}}>
    <Sidebar/>
    </Box>
    </Stack>
    </Box>
    </Box>
  );
}

