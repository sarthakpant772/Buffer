import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../features/cart/cartSlice'
import previousBuyReducer from '../features/previousBuy/previousBuySlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    previousBuy: previousBuyReducer,
  },
})
