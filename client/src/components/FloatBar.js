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
            marginBottom: '1em',
          }}
        >
          <Link to="buyer/allProducts">
            <Button
              variant="outlined"
              size="large"
              sx={{
                size: 'medium',
              }}
            >
              BUYER
            </Button>
          </Link>
          <Link to="seller/addTender">
            <Button
              sx={{ height: '100%', marginLeft: '1em' }}
              variant="outlined"
              size="large"
            >
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
