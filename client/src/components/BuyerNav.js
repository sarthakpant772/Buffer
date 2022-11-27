import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BuyerNav = () => {
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
          justifyContent: 'start',
          height: '3em',
          flexDirection: 'row',
        }}
      >
        <Link to="allTender">
          <Button variant="outlined" size="medium">
            TENDER
          </Button>
        </Link>
        <Link to="allProducts">
          <Button variant="outlined" size="">
            CHEMICALS
          </Button>
        </Link>
      </Box>
      <Outlet />
    </div>
  )
}

export default BuyerNav
