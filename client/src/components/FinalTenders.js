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

const FinalTenders = () => {
  const [dis, setDis] = useState([])
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
            <TableCell align="right">Asked Price</TableCell>
            <TableCell align="right">Price got&nbsp;(g)</TableCell>
            <TableCell align="right">Quantity&nbsp;(g)</TableCell>
            <TableCell align="right">date&nbsp;(g)</TableCell>
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
              <TableCell align="right">{row.PriceGot}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FinalTenders
