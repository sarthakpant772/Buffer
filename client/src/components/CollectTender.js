import { Box, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage'
import ProductCard from './ProductCard'
import TenderCard from './TenderCard'

const GetProducts = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const getData = async () => {
    const httpID = process.env.REACT_APP_BACKEND
    const companyId = localStorage.getItem('companyId')
    const Cdata = await axios.get(
      `${httpID}/chemical/getSpecificChemical/${companyId}`,
    )
    // console.log(Cdata)
    setData(Cdata.data)
    if (Cdata.data.length !== 0) {
      setLoading(false)
      console.log(loading)
    }
  }

  useEffect(() => {
    getData()
    console.log(data)
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
          Your Tenders
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100',
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
          <Box
            marginBottom={'4em'}
            sx={{
              marginTop: '2em',
            }}
          >
            <Grid container spacing={3}>
              {data && data.map((item) => <ProductCard item={item} />)}
            </Grid>
            {loading && <LoadingPage />}
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default GetProducts
