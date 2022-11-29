import { Box, colors, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TenderCard from './TenderCard'
import empty from '../images/empty.gif'
const Tender = () => {
  const [data, setData] = useState()

  const getData = async () => {
    try {
      const tempData = await axios.get(
        'http://localhost:5000/chemical/getTenderData',
      )
      // console.log(tempData.data)
      setData(tempData.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Paper
      sx={{
        width: '90%',
        margin: 'auto',
        marginBottom: '3em',
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
          background:
            'linear-gradient(270deg, #EA63BF -56.91%, #5B72E2 62.94%, #7C4ADF 164.36%)',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            marginLeft: '1em',
          }}
        >
          TENDER
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: ' 100',
          zIndex: 2,
          justifyContent: 'start',
          height: '',
          flexDirection: 'row',
          marginTop: '1em',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            height: 'auto',
            width: '90%',
            zIndex: 9,
          }}
        >
          <Box marginBottom={'3em'}>
            <Grid container spacing={3}>
              {data && data.map((item) => <TenderCard item={item} />)}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default Tender
