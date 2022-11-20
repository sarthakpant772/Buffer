import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const initialState = {
  count: 0,
  totalValue: 0,
  cart: [],
  status: null,
}

export const productDelete = createAsyncThunk(
  'cart/productDelete',
  async (item) => {
    var companyId = localStorage.getItem('companyId')
    console.log(companyId)
    console.log(item.item._id)
    try {
      const responce = await axios.delete(
        `http://localhost:5000/cart/${item.item._id}`,
        {
          data: { userId: companyId },
        },
      )

      console.log(responce.data.products)
      return responce.data.products
    } catch (err) {
      console.log(err)
    }
  },
)

export const productFetch = createAsyncThunk('cart/productFetch', async () => {
  var companyId = localStorage.getItem('companyId')
  const responce = await axios.get(`http://localhost:5000/cart/${companyId}`)
  return responce.data
})

export const productAdd = createAsyncThunk('cart/productAdd', async (item) => {
  var companyId = localStorage.getItem('companyId')

  // console.log(item.item)
  try {
    const responce = await axios.put('http://localhost:5000/cart/addProducts', {
      userId: companyId,
      products: {
        name: item.item.name,
        price: item.item.price,
        quantity: item.item.quantity,
      },
    })

    return responce.data.products
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
      state.count -= 1
      state.totalValue -= action.payload
    },
  },
  extraReducers: {
    [productFetch.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      // console.log(action.payload)
      var count = Object.keys(action.payload.products).length
      state.count = count
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
      state.cart = action.payload
    },
    [productDelete.fulfilled]: (state, action) => {
      state.status = 'fulfilled'
      state.count = state.count - 1
      state.cart = action.payload
    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
