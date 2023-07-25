import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  CssBaseline,
  makeStyles,
  Paper,
  Typography,
} from '@mui/material'
import ArchiveIcon from '@mui/icons-material/Archive'
import { textAlign } from '@mui/system'
import { useSelector } from 'react-redux'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import logo from '../images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const count = useSelector((state) => state.user.islogged)
  const data = useSelector((state) => state.user.data)
  const [loggedIn, setLoggedIn] = useState(false)
  const [number, setNumber] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  const tempCost = useSelector((state) => state.cart.totalCost)
  const noItem = useSelector((state) => state.cart.count)

  const handleClear = () => {
    localStorage.clear()
    setLoggedIn(false)
    navigate('/')
    window.location.reload()
  }
  useEffect(() => {
    setNumber(noItem)

    setTotalCost(tempCost)
    setLoggedIn(count)
    // console.log(userData)
  }, [noItem, tempCost, count, loggedIn])
  const [value, setValue] = React.useState(0)
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          display: { xs: 'flex' },
          boxShadow: '1px 3px 7px 1px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* upper */}
        <Box
          sx={{
            width: '100%',
            height: '4.63em',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          {/* left */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              width: { md: '5%' },
              height: '100%',
            }}
          >
            <Link to="/">
              <Box
                component="img"
                sx={{
                  height: '3em',
                }}
                src={logo}
              />
            </Link>
          </Box>
          {/* right */}

          <Box
            sx={{
              width: { xs: '100%', md: '90%' },
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'space-evenly', md: 'flex-end' },
              alignItems: 'center',
            }}
          >
            {/*  */}
            {/* <Link to="/tendernew">
              <Button
                sx={{
                  height: '2.50em',
                  width: '10em',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#333333',
                  }}
                >
                  Feature
                </Typography>
              </Button>
            </Link> */}
            <Link to="/about">
              <Button
                sx={{
                  height: '2.50em',
                  width: '10em',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#333333',
                  }}
                >
                  AboutUs
                </Typography>
              </Button>
            </Link>

            {/*   Login  */}
            {loggedIn || (
              <Link to="/login">
                <Button
                  sx={{
                    marginLeft: '2em',
                    height: '2.50em',
                    width: '9.75em',
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
                    Login
                  </Typography>
                </Button>
              </Link>
            )}
            {loggedIn && (
              <Box>
                <Link to="/dashboard/buyer/allProducts">
                  <Button
                    sx={{
                      height: '2.50em',
                      width: '13em',
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#333333',
                      }}
                    >
                      Dashboard
                    </Typography>
                  </Button>
                </Link>

                <Button
                  sx={{
                    marginLeft: '2em',
                    height: '2.50em',
                    width: '9.75em',
                    backgroundColor: '#4B75BE',
                    borderRadius: '2em',
                  }}
                  onClick={() => handleClear()}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'White',
                    }}
                  >
                    Logout
                  </Typography>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        {/* lower */}
      </Box>
    </div>
  )
}

export default Navbar
