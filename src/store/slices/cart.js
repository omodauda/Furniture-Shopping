import {createSlice} from '@reduxjs/toolkit';
import PRODUCTS from '@data/products';

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {productId, category, quantity} = action.payload;
      const item = PRODUCTS.find(
        product => product.category === category,
      ).list.find(p => p.id === productId);
      const {id, image, name, price, units} = item;
      const isOutOfStock = units < 1 ? true : false;
      if (isOutOfStock) {
        return;
      }
      const productIndex = state.products.findIndex(
        product => product.category === category && product.id === productId,
      );
      const existingProduct = state.products[productIndex];
      if (existingProduct) {
        return;
      }
      const newItem = {
        category,
        id,
        image,
        name,
        quantity,
        unitPrice: price,
        totalPrice: price * quantity,
      };
      return {
        products: [newItem, ...state.products],
        total: state.total + price * quantity,
      };
    },
    reduceItemQty: (state, action) => {
      const {category, productId, unitPrice, totalPrice} = action.payload;
      const productIndex = state.products.findIndex(
        product => product.category === category && product.id === productId,
      );
      const item = state.products[productIndex];
      item.quantity -= 1;
      item.totalPrice = totalPrice - unitPrice;
      state.total -= unitPrice;
    },
    increaseItemQty: (state, action) => {
      const {category, productId, unitPrice, totalPrice} = action.payload;
      const productIndex = state.products.findIndex(
        product => product.category === category && product.id === productId,
      );
      const item = state.products[productIndex];
      item.quantity += 1;
      item.totalPrice = totalPrice + unitPrice;
      state.total += unitPrice;
    },
    removeFromCart: (state, action) => {
      const {category, productId} = action.payload;
      const productIndex = state.products.findIndex(
        product => product.category === category && product.id === productId,
      );
      const item = state.products[productIndex];
      state.total -= item.totalPrice;
      state.products.splice(productIndex, 1);
    },
    clearCart: (state, action) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const {
  addToCart,
  reduceItemQty,
  increaseItemQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
