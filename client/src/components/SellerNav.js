import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SellerNav = () => {
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
        <Link to="addTender">
          <Button variant="outlined" size="medium">
            Check Tender
          </Button>
        </Link>
        <Link to="addProduct">
          <Button variant="outlined" size="">
            ADD CHEMICALS
          </Button>
        </Link>
        <Link to="collectedTender">
          <Button variant="outlined" size="">
            Collected Tenders
          </Button>
        </Link>
      </Box>
      <Outlet />
    </div>
  )
}

export default SellerNav
