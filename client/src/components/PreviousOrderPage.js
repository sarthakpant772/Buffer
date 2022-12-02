import { Box, colors, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TenderCard from './TenderCard'
import empty from '../images/empty.gif'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import ChemicalCard from './ChemicalCard'

const PreviousOrderPage = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const check = useSelector((state) => state.previousBuy.products)

  useEffect(() => {
    // console.log('hello')
    setData(check)
    console.log(check.length)
    if (check.length !== 0) {
      setLoading(false)
    }
  }, [check])

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
          Previous Orders
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
              {data && data.map((item) => <ChemicalCard item={item} />)}
            </Grid>
          </Box>
          {loading && (
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
          )}
        </Box>
      </Box>
    </Paper>
  )
}

export default PreviousOrderPage
