import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const FloatBar = () => {
  return (
    <Box>
      {/* floatbar */}
      <Paper
        sx={{
          width: '90%',
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: ' 100',
            zIndex: 2,
            justifyContent: 'start',
            height: '2.5em',
            flexDirection: 'row',
            marginTop: '3em',
          }}
        >
          <Link to="buyer/allProducts">
            <Button
              sx={{
                size: 'medium',
                borderBottom: 'none',
              }}
            >
              BUYER
            </Button>
          </Link>
          <Link to="seller/addTender">
            <Button variant="outlined" size="">
              SELLER
            </Button>
          </Link>
        </Box>
        <Outlet />
      </Paper>
    </Box>
  )
}

export default FloatBar
