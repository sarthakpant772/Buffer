import { Box, colors, Grid, Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TenderCard from './TenderCard'
import empty from '../images/empty.gif'
import { useDispatch } from 'react-redux'
import ChemicalCard from './ChemicalCard'
const ChemicalPage = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState([])
  const httpID = process.env.REACT_APP_BACKEND
  useEffect(() => {
    fetch(`${httpID}/chemical/getAllChemical`)
      .then((response) => response.json())
      .then((data) => setData(data))
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
          Product Page
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
        </Box>
      </Box>
    </Paper>
  )
}

export default ChemicalPage
