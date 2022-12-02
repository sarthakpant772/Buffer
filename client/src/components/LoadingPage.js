import { Box } from '@mui/system'
import React from 'react'

const LoadingPage = () => {
  return (
    <Box
      sx={{
        wdith: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        component="img"
        sx={{
          alignSelf: 'center',
          width: '100%',
          component: 'img',
          height: '16.875em',
          width: '17.625em',
          marginTop: '1em',
        }}
        alt="productimg"
        src={require(`../images/empty.gif`)}
      />
    </Box>
  )
}

export default LoadingPage
