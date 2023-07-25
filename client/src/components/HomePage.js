import { Box } from '@mui/material'
import React from 'react'
import Features from './Features'
import Footer from './Footer'
import Heropage from './Heropage'
import SignPage from './SignPage'
const HomePage = () => {
  return (
    <div>
      <Box style={{ marginLeft: '1em', marginRight: '1em' }}>
        <Heropage />
        <Features />
        <SignPage />
        <Footer />
      </Box>
    </div>
  )
}

export default HomePage
