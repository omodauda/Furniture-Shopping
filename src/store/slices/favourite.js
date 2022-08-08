import {createSlice} from '@reduxjs/toolkit'
import PRODUCTS from '@data/products'

const initialState = []

export const favouriteSlice = createSlice({
	name: 'favourite',
	initialState,
  reducers: {
    addToFav: (state, action) => {
      const { category, productId } = action.payload;
      const item = PRODUCTS.find(
        product => product.category === category
      ).list.find(p => p.id === productId);
      const { id, name, image, price } = item;
      const productIndex = state.findIndex(product => product.category === category && product.id === productId)
      const existingProduct = state[productIndex]
      if (existingProduct) return;
      const newItem = {
        category,
        id,
        image,
        name,
        price
      }
      state.push(newItem)
    },
    removeFromFav: (state, action) => {
      const { category, productId } = action.payload;
      const productIndex = state.findIndex(product => product.category === category && product.id === productId)
      state.splice(productIndex, 1)
    }
  }
})

export const {addToFav, removeFromFav} = favouriteSlice.actions
export default favouriteSlice.reducer