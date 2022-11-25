import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import TenderCard from './TenderCard'

const Tender = () => {
  return (
    
    <Paper
    sx={{
        width: '90%',
        margin:'auto',
        marginBottom:'3em'
        
    }}>

    <Box
    sx={{
        display: 'flex',
        width:" 100",
        zIndex: 2,
        justifyContent:'start',
        height: '2.5em',
        flexDirection:'row',
        marginTop:'3em',
        background:
                  'linear-gradient(270deg, #EA63BF -56.91%, #5B72E2 62.94%, #7C4ADF 164.36%)',
        alignItems: 'center',

    }}>
        <Typography
        sx={{
            marginLeft:'1em'

        }}>TENDER</Typography>

    </Box>
    
    
    <Box
    sx={{
        display: 'flex',
        width:" 100",
        zIndex: 2,
        justifyContent:'start',
        height: '',
        flexDirection:'row',
        marginTop:'1em',
        alignItems:'center'

    }}        
    >
    <Box
    sx={{
      
      margin: 'auto',
       height:'auto',
        width:'90%',
        zIndex:9,
        
        
    }}
    >
        <TenderCard/>

    </Box>


    </Box>


    </Paper>


  )
}

export default Tender