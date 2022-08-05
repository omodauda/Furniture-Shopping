import { createSlice } from '@reduxjs/toolkit'
import PRODUCTS from '@data/products'

const initialState = {
  products: PRODUCTS,
  total: 95
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export default cartSlice.reducer