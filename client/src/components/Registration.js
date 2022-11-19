import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import React, { useState } from 'react'

const Registration = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [companyName, setCompanyName] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('')

  const [phoneNumber, setPhoneNumber] = useState('')

  const [acType, setAcType] = useState('BUYER')
  const [lable, setLable] = useState(1)
  const paperStyle = { padding: '100px 200px', width: 350, magrin: '70px auto' }
  const avatarStyle = { marginBottom: '30px', marginTop: '10px' }
  const headerStyle = { margin: 0 }
  const formStyle = { margin: 0, marginTop: '50px' }
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert('password incorrect')
      setPassword('')
      setConfirmPassword('')
    } else if (email === '' || password === '' || acType === '') {
      alert('fill required details completely')
    } else {
      const savedData = await axios.post(
        'http://localhost:5000/user/register',
        {
          email: email,
          password: password,
          companyName: companyName,
          phoneNumber: phoneNumber,
          acType: acType,
        },
      )
      if (savedData.status === 500) {
        alert('server error occured')
      } else {
        localStorage.setItem('companyId', savedData.data._id)
        navigate('/productList')
      }
      // console.log(savedData.data)
    }
  }
  return (
    <Grid align="center" marginTop="70px">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <Grid>
            <h2 style={headerStyle}>REGISTRATION</h2>
            <Typography varient="caption">
              Please fill this form for buying and selling !
            </Typography>
          </Grid>

          <form style={formStyle}>
            <TextField
              margin="dense"
              fullWidth
              label="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              margin="dense"
              fullWidth
              label="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              type="password"
              margin="dense"
              fullWidth
              label="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Company Name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
                value={acType}
                required
                onChange={(e) => setAcType(e.target.value)}
              >
                <FormControlLabel
                  value="BUYER"
                  control={<Radio />}
                  label="BUYER"
                />
                <FormControlLabel
                  value="SELLER"
                  control={<Radio />}
                  label="SELLER"
                />
              </RadioGroup>
            </FormControl>
            <Button varient="contained" color="primary" onClick={handleSubmit}>
              Register
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Registration
