import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import {
  Badge,
  Box,
  Button,
  makeStyles,
  Paper,
  Typography,
} from '@mui/material'
import { textAlign } from '@mui/system'
import { useSelector } from 'react-redux'

import logo from '../images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const count = useSelector((state) => state.user.islogged)
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
  }, [noItem, tempCost, count, loggedIn])

  return (
    <div>
      <Box
        sx={{
          boxShadow: '1px 3px 7px 1px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* upper */}
        <Box
          sx={{
            height: '4.63em',
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          {/* left */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '5%',
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
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {/*  */}
            <Link to="/tendernew">
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
            </Link>

            <Button
              sx={{
                height: '2.50em',
                width: '10em',
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'black',
                }}
              >
                Pricing
              </Typography>
            </Button>
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
