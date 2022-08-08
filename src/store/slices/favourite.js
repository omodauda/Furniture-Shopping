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
      ).list.find(P => P.id === productId);
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
    }
  }
})

export const {addToFav} = favouriteSlice.actions
export default favouriteSlice.reducer