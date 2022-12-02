import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import Ellipse from '../images/Ellipse.png'

const SignPage = () => {
  const [acType, setAcType] = React.useState('a')
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '65em',

          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            height: '70%',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Box>
            <Box
              sx={{
                height: '10.125em',
                width: '35.625em',
              }}
            >
              <Typography variant="h2">
                Operations in the chemical manufacturing sector include: Basic
                chemicals facilities produce chemicals by basic processes, such
                as thermal cracking and distillation.
              </Typography>
            </Box>

            <Box
              sx={{
                height: '9.875em',
                width: '40.8125em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6">
                You can now track your order so that you dont have to call your
                delivery patner alot.
              </Typography>
            </Box>

            <Box
              sx={{
                boxSizing: 'border-box',
                background: ' #FFFFFF',
                borderRadius: '6.25em',
                borderStyle: 'solid',
                borderWidth: '0.125em',
                borderColor: '#51A387',
                width: '20%',
              }}
            >
              <Button>
                <Typography variant="subtitle1">Who We Are</Typography>
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: '70%',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={Ellipse}
            sx={{
              width: '49em',
              height: '50em',
              zIndex: '-1',
              position: 'absolute',
            }}
          />
          <Box
            sx={{
              height: '100%',
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h3">
                Register now and try BUFFER for free
              </Typography>
            </Box>

            <Box
              sx={{
                width: '100%',
              }}
            >
              <Box width="100%" justifyContent="space-evenly" alignItem="left">
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">
                    <Typography variant="h5">Type</Typography>
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
              </Box>

              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Typography variant="h5">WORK Email</Typography>
                <TextField
                  id="outlined-start-adornment"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    background: 'white',
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Typography variant="h5">Password</Typography>
                <TextField
                  id="outlined-start-adornment"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    background: 'white',
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Typography variant="h5">Confirm Password</Typography>
                <TextField
                  id="outlined-start-adornment"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    background: 'white',
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: '100%',
                }}
              >
                <Typography variant="h5">Company Name</Typography>
                <TextField
                  id="outlined-start-adornment"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{
                    background: 'white',
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Button variant="contained">SUBMIT</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default SignPage
