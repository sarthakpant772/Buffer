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
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const AddChemicals = () => {
  const paperStyle = { padding: '100px 200px', width: 350, magrin: '70px auto' }
  const avatarStyle = { marginBottom: '30px', marginTop: '10px' }
  const headerStyle = { margin: 0 }
  const formStyle = { margin: 0, marginTop: '50px' }
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
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              margin="dense"
              fullWidth
              label="Password"
              //   value={password}
              //   required
              //   onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              type="password"
              margin="dense"
              fullWidth
              label="Confirm Password"
              required
              //   value={confirmPassword}
              //   onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Company Name"
              required
              //   value={companyName}
              //   onChange={(e) => setCompanyName(e.target.value)}
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
                // value={acType}
                // required
                // onChange={(e) => setAcType(e.target.value)}
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
            <Button varient="contained" color="primary">
              Register
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AddChemicals
