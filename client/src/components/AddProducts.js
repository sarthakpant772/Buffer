import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NACL from '../'
import React, { useState } from 'react'
import axios from 'axios'

const paperStyle = { padding: '100px 200px', width: 350, magrin: '70px auto' }
const avatarStyle = { marginBottom: '30px', marginTop: '10px' }
const headerStyle = { margin: 0 }
const formStyle = { margin: 0, marginTop: '50px' }

const currencies = [
  {
    value: 'NACL',
    label: 'NACL',
  },
  {
    value: 'Zn',
    label: 'Zn',
  },
  {
    value: 'Acetone',
    label: 'Acetone',
  },
  {
    value: 'nitric Acid',
    label: 'nitric Acid',
  },
  {
    value: 'Sulfuric Acid (H2SO4)',
    label: 'Sulfuric Acid (H2SO4)',
  },
  {
    value: 'Nitrogen (N2)',
    label: 'Nitrogen (N2)',
  },
  {
    value: 'Ethylene (C2H4)',
    label: 'Ethylene (C2H4)',
  },
  {
    value: 'Oxygen (O2)',
    label: 'Oxygen (O2)',
  },
  {
    value: 'Propylene (C3H6)',
    label: 'Propylene (C3H6)',
  },
  {
    value: 'Chlorine (Cl2)',
    label: 'Chlorine (Cl2)',
  },
  {
    value: 'Ethylene Dichloride (C2H2Cl2)',
    label: 'Ethylene Dichloride (C2H2Cl2)',
  },

  {
    value: 'Phosphoric Acid (H3PO4)',
    label: 'Phosphoric Acid (H3PO4)',
  },
  {
    value: 'Ammonia (NH3)',
    label: 'Ammonia (NH3)',
  },
  {
    value: 'Sodium Hydroxide (NaOH)',
    label: 'Sodium Hydroxide (NaOH)',
  },
  {
    value: 'Sodium carbonate',
    label: 'Sodium carbonate',
  },
  {
    value: 'Sodium silicate',
    label: 'Sodium silicate',
  },
  {
    value: 'Aluminum sulfate',
    label: 'Aluminum sulfate',
  },
  {
    value: 'Urea',
    label: 'Urea',
  },
  {
    value: 'Potash',
    label: 'Potash',
  },
  {
    value: 'Titanium dioxide',
    label: 'Titanium dioxide',
  },
]
const Grade = [
  {
    value: 'A+',
    label: 'A+',
  },
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B+',
    label: 'B+',
  },
  {
    value: 'C+',
    label: 'C+',
  },
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'D+',
    label: 'D+',
  },
  {
    value: 'D',
    label: 'D',
  },
]

const AddProducts = () => {
  const [currency, setCurrency] = React.useState('default')
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [grade, setGrade] = useState('')

  const [isTender, setIsTender] = useState('false')

  const handleSubmit = async (e) => {
    const data = process.env.REACT_APP_BACKEND
    var companyId = localStorage.getItem('companyId')
    try {
      const data = await axios.post(`${data}/chemical/addChemical`, {
        companyId: companyId,
        name: currency,
        quantity: quantity,
        grade: grade,
        price: price,
        isTender: isTender,
      })
      console.log(data.data._id)
      if (isTender === 'true') {
        const finalData = await axios.post(
          'http://localhost:5000/tender/createTender',
          {
            productId: data.data._id,
            companyId: companyId,
          },
        )
        console.log(finalData)
      }
    } catch (err) {
      alert('Please fill details carefully')
      console.log(err)
    } finally {
      setCurrency('')
      setQuantity('')
      setGrade('')
      setPrice('')
      setIsTender('false')
      alert('product added')
    }
  }

  return (
    <Grid align="center" marginTop="70px">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AccountCircleIcon />
          </Avatar>
          <Grid>
            <h2 style={headerStyle}>Add Product</h2>
            <Typography varient="caption">
              Please fill the details of this form to sell your product !
            </Typography>
          </Grid>

          <form style={formStyle}>
            <TextField
              id="outlined-select-currency"
              select
              margin="dense"
              required
              fullWidth
              label="Name"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-select-currency"
              select
              margin="dense"
              required
              fullWidth
              label="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              {Grade.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="dense"
              fullWidth
              label="Quantity"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kg</InputAdornment>
                ),
              }}
            />
            <TextField
              margin="dense"
              fullWidth
              label="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Rs.</InputAdornment>
                ),
              }}
            />
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Product Type
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
                value={isTender}
                required
                onChange={(e) => setIsTender(e.target.value)}
              >
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Product"
                />
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Tender"
                />
              </RadioGroup>
            </FormControl>
          </form>
          <Button
            varient="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
          >
            Add Product
          </Button>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default AddProducts
