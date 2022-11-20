import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Badge, Box, Typography } from '@mui/material'
import { textAlign } from '@mui/system'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [number, setNumber] = useState(0)
  const noItem = useSelector((state) => state.cart.count)
  useEffect(() => {
    setNumber(noItem)
  }, [noItem])

  return (
    <div>
      <Box
        sx={{
          zIndex: 2,
          width: '100%',
          height: '8.31em',
        }}
      >
        {/* upperbox */}
        <Box sx={{ height: '2.8125em', borderBottom: 'solid' }}>
          {/* left */}
          <Box sx={{ display: 'flex', textAlign: 'center' }}>
            <Box
              sx={{
                height: '2.81em',
                width: '5.88em',
                background:
                  'linear-gradient(270deg, #EA63BF -56.91%, #5B72E2 62.94%, #7C4ADF 164.36%)',
              }}
            >
              <Typography variant="h5">Home</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                height: '2.81em',
                width: '6.25em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p"> val1</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                height: '2.81em',
                width: '6.25em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p"> val1</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                height: '2.81em',
                width: '6.25em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p"> val1</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                height: '2.81em',
                width: '6.25em',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: 'solid',
              }}
            >
              <Typography variant="p"> val3</Typography>
            </Box>
          </Box>
          {/* right:  */}
        </Box>

        {/*lower box*/}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottom: 'solid',
            width: '100%',
          }}
        >
          {/*left box */}
          <Box sx={{ display: 'flex', textAlign: 'center', width: '70%' }}>
            <Box
              sx={{
                display: 'flex',
                width: '5.88em',
                height: '5.5em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p">logo</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '9.8125em',
                height: '5.5em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p"> val1</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '9.8125em',
                height: '5.5em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p">val2</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '9.8125em',
                height: '5.5em',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="p"> val3</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                width: '9.8125em',
                height: '5.5em',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: 'solid',
                position: 'relative',
                right: ' 0.9375em',
              }}
            >
              <Typography variant="p"> val4</Typography>
            </Box>
          </Box>

          {/*right box */}
          <Box>
            <Badge badgeContent={number} color="primary">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Navbar
