import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  products: [],
  status: [],
  value: 0,
}
const httpID = process.env.REACT_APP_BACKEND
export const getPreviousBuy = createAsyncThunk(
  'previousBuy/getPreviousBuy',
  async () => {
    var companyId = localStorage.getItem('companyId')

    const data = await axios.get(
      `${httpID}/previousBuy/getPreviousChemical/${companyId}`,
    )

    return data.data.products
  },
)

export const previousBuySlice = createSlice({
  name: 'previousBuy',
  initialState,
  reducers: {},
  extraReducers: {
    [getPreviousBuy.fulfilled]: (state, action) => {
      state.products = action.payload
      state.state = 'fulfilled'
    },
    [getPreviousBuy.rejected]: (state, action) => {
      state.state = 'rejected'
    },
    [getPreviousBuy.pending]: (state, action) => {
      state.state = 'pending'
    },
  },
})

export default previousBuySlice.reducer
