import { Badge, Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
const BuyerNav = () => {
  const count = useSelector((state) => state.cart.count)
  return (
    <div>
      <Box
        sx={{
          outlineStyle: 'solid',
          outlineColor: 'black',
          outlineWidth: 'thin',
          display: 'flex',
          width: ' 100',
          zIndex: 2,
          justifyContent: 'space-between',
          height: '3em',
          flexDirection: 'row',
          textDecoration: 'none',
        }}
      >
        <Box
          sx={{
            width: '40%',
            display: 'flex',
            flexDirection: 'row',
            // justifyContent: 'space-around',
          }}
        >
          <Link to="allTender">
            <Button sx={{ height: '100%' }} variant="outlined" size="large">
              TENDER
            </Button>
          </Link>
          <Link to="allProducts">
            <Button
              sx={{ height: '100%', marginLeft: '1em' }}
              variant="outlined"
              size="large"
            >
              CHEMICALS
            </Button>
          </Link>
          <Link to="previousBuy">
            <Button
              sx={{ height: '100%', marginLeft: '1em' }}
              variant="outlined"
              size="large"
            >
              Previous Buy
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            width: '10%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link to="cart">
            <Badge badgeContent={count} color="success">
              <ShoppingCartIcon color="action" />
            </Badge>
          </Link>
        </Box>
      </Box>
      <Outlet />
    </div>
  )
}

export default BuyerNav
