import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  islogged: false,
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
  },
})

export const { loggedIn, loggedOut } = userSlice.actions

export default userSlice.reducer
