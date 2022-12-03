import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import axios from 'axios'
// import { chownSync } from 'fs'
import React, { useEffect, useState } from 'react'
import LoadingPage from './LoadingPage'

const FinalTenders = () => {
  const [dis, setDis] = useState([])
  const [loading, setLoading] = useState(true)
  function createData(name, buyer, calories, fat, carbs, protein) {
    return { name, buyer, calories, fat, carbs, protein }
  }
  let rows = []
  const getAllData = async () => {
    const companyId = localStorage.getItem('companyId')

    try {
      const data = await axios.get(
        `http://localhost:5000/completed/getById/${companyId}`,
      )
      console.log(data.data)
      setDis(data.data)
      if (data.data.length !== 0) setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllData()
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name of chemical</TableCell>
            <TableCell>Name of Buyer</TableCell>
            <TableCell align="right">Asked Price(Rs.)</TableCell>
            <TableCell align="right">Price got(Rs.)</TableCell>
            <TableCell align="right">Quantity(Kg)</TableCell>
            <TableCell align="right">grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dis.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.companyName}
              </TableCell>
              <TableCell align="right">{parseInt(row.AskedPrice)}</TableCell>
              <TableCell align="right">{row.PriceGot / 33333}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
          {loading && <LoadingPage />}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FinalTenders
