import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Login = () => {

    const paperStyle={padding:'30px 20px' , width:300, margin:"20px auto",marginBottom:'2000px'}
    const headerStyle={margin:0}
    const avatarStyle={backgroungColor:'red',marginBottom:'30px'}
    const formStyle={padding:'20px'}
    return (
    <Grid>
        <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                <AddCircleOutlineIcon/>      
                </Avatar>
                <h2 style={headerStyle}>SIGN UP</h2>
                <Typography variant='caption'>Please fill this form to create an account !</Typography>
            </Grid>
            <form style={formStyle}>
                
                <TextField margin="dense" fullWidth label='Email'/>
                <TextField margin="dense" fullWidth label='Password'/>
                <Button type='submit' varient='contained' color='primary'>SIGN UP</Button>
            </form>

        </Paper>
    </Grid>
  )
}

export default Login