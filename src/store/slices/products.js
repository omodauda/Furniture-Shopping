import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from '@data/products'

const initialState = []

export const productSlice = createSlice({
	name: 'products',
	initialState,
  reducers: {
    setProducts: (state, action) => {
      // console.log('payload', action.payload)
      const { products } = action.payload;
      return products;
    }
  }
})

export const {setProducts} = productSlice.actions
export default productSlice.reducer