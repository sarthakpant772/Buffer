import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const initialState = {
  count: 0,
  totalValue: 0,
  cart: [],
  totalCost: 0,
  status: null,
}
const httpID = process.env.REACT_APP_BACKEND

export const productDelete = createAsyncThunk(
  'cart/productDelete',
  async (item) => {
    var companyId = localStorage.getItem('companyId')
    try {
      const responce = await axios.delete(`${httpID}/cart/${item.item._id}`, {
        data: {
          userId: companyId,
          products: {
            name: item.item.name,
            price: item.item.price,
            quantity: item.item.quantity,
          },
        },
      })

      // console.log(responce.data)
      return responce.data
    } catch (err) {
      console.log(err)
    }
  },
)

export const productFetch = createAsyncThunk('cart/productFetch', async () => {
  var companyId = localStorage.getItem('companyId')
  const responce = await axios.get(`${httpID}/cart/${companyId}`)
  return responce.data
})

export const productAdd = createAsyncThunk('cart/productAdd', async (item) => {
  var companyId = localStorage.getItem('companyId')
  // console.log(item.item.price)
  try {
    const responce = await axios.put(`${httpID}/cart/addProducts`, {
      userId: companyId,
      products: {
        name: item.item.name,
        price: item.item.price,
        quantity: item.item.quantity,
      },
    })
    console.log(responce)
    return responce.data
  } catch (error) {
    console.log(error)
  }
})

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.count += 1
      console.log(state.count)
    },
    removeItem: (state, action) => {
      state.count = 0
      state.totalValue = null
    },
  },
  extraReducers: {
    [productFetch.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      // console.log(action.payload)
      var count = Object.keys(action.payload.products).length
      state.count = count
      state.totalCost = action.payload.totalCost
      state.cart = action.payload
    },
    [productFetch.pending]: (state, action) => {
      state.status = 'pending'
    },
    [productFetch.rejected]: (state, action) => {
      state.status = 'rejected'
    },
    [productAdd.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.count = state.count + 1

      state.totalCost = action.payload.totalCost
      state.cart = action.payload.products
    },
    [productDelete.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.count = state.count - 1
      state.totalCost = action.payload.totalCost
      state.cart = action.payload
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
