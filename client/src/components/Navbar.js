import React from 'react'
import { Box, Typography } from '@mui/material'
const Navbar = () => {
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
        <Box sx={{ height: '2.8125em' }}>
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
              }}
            >
              <Typography variant="p"> val1</Typography>
            </Box>
            <Box>
              <Typography variant="p"> val1</Typography>
            </Box>
            <Box>
              <Typography variant="p"> val1</Typography>
            </Box>
            <Box>
              <Typography variant="p"> val1</Typography>
            </Box>
          </Box>
          {/* right:  */}
          <Box></Box>
        </Box>
      </Box>
    </div>
  )
}

export default Navbar
