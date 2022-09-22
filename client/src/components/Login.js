import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/user/login', {
        email,
        password,
      })
      if (res.status === 200) {
        console.log('loggedin', res)
      } else {
        console.log('not verified')
      }
    } catch (err) {
      console.log(err)
    }
  }
  const paperStyle = {
    padding: '30px 20px',
    width: 300,
    margin: '20px auto',
    marginBottom: '2000px',
  }
  const headerStyle = { margin: 0 }
  const avatarStyle = { backgroungColor: 'red', marginBottom: '30px' }
  const formStyle = { padding: '20px' }

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>SIGN UP</h2>
          <Typography variant="caption">
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form style={formStyle}>
          <TextField
            margin="dense"
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            margin="dense"
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button varient="contained" color="primary" onClick={handleSubmit}>
            SIGN UP
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Login
