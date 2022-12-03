import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  islogged: false,
  data: [],
}

export const checkLoggedIn = createAsyncThunk(
  'user/checkLoggedIn',
  async () => {
    const companyId = localStorage.getItem('companyId')
    if (companyId) {
      return true
    }
    return false
  },
)
export const getUserData = createAsyncThunk('user/getUserData', async () => {
  const companyId = localStorage.getItem('companyId')

  const data = await axios.get(`http://localhost:5000/getUser/${companyId}`)
  // console.log('reduxdata', data)
  return data.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      console.log('dispatch done')
      state.islogged = true
    },
    loggedOut: (state, action) => {
      state.islogged = false
    },
  },
  extraReducers: {
    [checkLoggedIn.fulfilled]: (state, action) => {
      state.islogged = action.payload
    },
    [checkLoggedIn.getUserData]: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { loggedIn, loggedOut } = userSlice.actions

export default userSlice.reducer
