import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from '@data/products'

const initialState = PRODUCTS

export const favouriteSlice = createSlice({
	name: 'favourite',
	initialState,
	reducers: {}
})

export default favouriteSlice.reducer