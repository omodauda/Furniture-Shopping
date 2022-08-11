import {createSlice} from '@reduxjs/toolkit';
import PRODUCTS from '@data/products';

const initialState = {
  favouriteProducts: [],
};

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    addToFav: (state, action) => {
      const {category, productId} = action.payload;
      const item = PRODUCTS.find(
        product => product.category === category,
      ).list.find(p => p.id === productId);
      const {id, name, image, price, units} = item;
      const productIndex = state.favouriteProducts.findIndex(
        product => product.category === category && product.id === productId,
      );
      const existingProduct = state[productIndex];
      if (existingProduct) return;
      const newItem = {
        category,
        id,
        image,
        name,
        price,
        units,
      };
      return {
        favouriteProducts: [newItem, ...state.favouriteProducts],
      };
    },
    removeFromFav: (state, action) => {
      const {category, productId} = action.payload;
      const productIndex = state.favouriteProducts.findIndex(
        product => product.category === category && product.id === productId,
      );
      state.favouriteProducts.splice(productIndex, 1);
    },
    clearFav: (state, action) => {
      state.favouriteProducts = [];
    },
  },
});

export const {addToFav, removeFromFav, clearFav} = favouriteSlice.actions;
export default favouriteSlice.reducer;
