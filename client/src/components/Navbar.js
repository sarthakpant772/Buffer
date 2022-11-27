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
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [number, setNumber] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const tempCost = useSelector((state) => state.cart.totalCost)
  const noItem = useSelector((state) => state.cart.count)
  useEffect(() => {
    setNumber(noItem)
    setTotalCost(tempCost)
  }, [noItem])

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
            <Box
              component="img"
              sx={{
                height: '3em',
              }}
              src={logo}
            />
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
            {/*   Login  */}
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
          </Box>
        </Box>
        {/* lower */}
      </Box>
    </div>
  )
}

export default Navbar
