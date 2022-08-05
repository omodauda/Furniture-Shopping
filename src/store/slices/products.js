import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from '@data/products'

const initialState = PRODUCTS

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {}
})

export default productSlice.reducer