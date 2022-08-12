import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const {deliveryFee, address, orderAmount, quantity, orders} =
        action.payload;

      const orderNo = Math.floor(100000000 + Math.random() * 900000000);
      const newOrder = {
        id: state.orders.length + 1,
        date: new Date().toLocaleDateString(),
        status: 'Processing',
        orderNo,
        deliveryFee,
        orderAmount,
        totalAmount: orderAmount + deliveryFee,
        quantity,
        orders,
        address,
      };
      return {
        orders: [newOrder, ...state.orders],
      };
    },
  },
});

export const {createOrder} = orderSlice.actions;
export default orderSlice.reducer;
