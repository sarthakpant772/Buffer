import { Button, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const FloatBar = () => {
  return (
    <Box>
        {/* floatbar */}
    <Paper
    sx={{
        width: '90%',
        margin:'auto',
    }}>
      <Box
      sx={{
      display: 'flex',
      width:" 100",
      zIndex: 2,
      justifyContent:'start',
      height: '2.5em',
      flexDirection:'row',
      marginTop:'3em'

      }}>
         <Button sx={{
          size:'medium', borderBottom:'none'}}>BUYER</Button>
    <Button variant="outlined" size="" >SELLER</Button>

      </Box>
    <Box
    sx={{
      
      outlineStyle: 'solid',
      outlineColor: 'black',
      outlineWidth: 'thin',
        display: 'flex',
        width:" 100",
        zIndex: 2,
        justifyContent:'start',
        height: '3em',
        flexDirection:'row',
       
    }}
    >
    <Button variant="outlined" size="medium">TENDER</Button>
    <Button variant="outlined" size="" >CHEMICALS</Button>

    </Box> 
    </Paper>




    </Box>

  )
}

export default FloatBar