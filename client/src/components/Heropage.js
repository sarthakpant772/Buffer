import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import background from '../images/heroBack.png'
import Navbar from './Navbar'
import heroMain from '../images/heroMain.gif'
import outlook from '../images/outlook.svg'
import gmail from '../images/gmail.svg'
import iosMail from '../images/iosMail.svg'
import { Link } from 'react-router-dom'
const Heropage = () => {
  return (
    <div>
      <Box
        sx={{
          height: { xs: '80vh', md: '51.63em' },
          width: '100%',
        }}
      >
        <Box
          component="img"
          sx={{
            display: { xs: 'none', md: 'flex' },
            zIndex: '-1',
            position: 'absolute',
            // width: '100%',
            height: '90%',
            backgroundSize: 'cover',
          }}
          src={background}
        />
        <Box
          sx={{
            height: '100%',
            width: '100%',
            display: { xs: 'flex' },
            flexDirection: 'row',
            // backgroundColor: 'black',
          }}
        >
          {/* left */}
          <Box
            sx={{
              width: { xs: '100%', md: '60%' },
              zIndex: '1',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                height: { xs: '100%', md: '70%' },
                width: { xs: '100%', md: '60%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {/* upper */}

              <Box
                sx={{
                  height: '35%',
                  width: '90%',
                  alignItems: 'center',
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  BUFFER
                </Typography>
                <Typography variant="h2" sx={{ fontWeight: 'semi-bold' }}>
                  Connecting Industries That Do Matter To The Society. Helps
                  builing and creating more and more industries.
                </Typography>
              </Box>
              {/* Lower */}
              <Box
                sx={{
                  height: { xs: '30%', md: '50%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}
              >
                <Box>
                  <Typography
                    style={{ marginLeft: { xs: '2em', md: 0 } }}
                    variant="subtitle2"
                  >
                    Connect With Us
                  </Typography>
                  <Box
                    sx={{
                      marginTop: '2em',
                      display: 'flex',
                      flexDirection: 'row',
                      width: { md: '50%' },

                      justifyContent: {
                        xs: 'space-evenly',
                        md: 'space-between',
                      },
                    }}
                  >
                    <Button>
                      <Box
                        component="img"
                        src={outlook}
                        sx={{ width: '4.13em', height: '4.13em' }}
                      ></Box>
                    </Button>
                    <Button>
                      <Box
                        component="img"
                        src={gmail}
                        sx={{ width: '4.13em', height: '4.13em' }}
                      />
                    </Button>

                    <Button>
                      <Box
                        component="img"
                        src={iosMail}
                        sx={{ width: '4.13em', height: '4.13em' }}
                      />
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link to="/register">
                    <Button
                      sx={{
                        textDecoration: 'none',
                        marginTop: '2em',
                        height: '3.50em',
                        width: '12.75em',
                        backgroundColor: '#4B75BE',
                        borderRadius: '2em',
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: 'White',
                        }}
                      >
                        Register Here
                      </Typography>
                    </Button>
                  </Link>
                </Box>
                <Typography
                  style={{ marginLeft: { xs: '2em', md: 0 } }}
                  variant="subtitle2"
                  sx={{}}
                >
                  Trusted by many Industries
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* right image */}
          <Box
            sx={{
              margin: '1em',
              marginRight: '3em',
              width: '50%',
              height: '51em',
              zIndex: '0',
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
            }}
          >
            <Box
              component="img"
              sx={{
                display: { xs: 'none', md: 'flex' },
                width: '50%',
                position: 'absolute',
                height: '39em',
              }}
              src={heroMain}
            />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Heropage
