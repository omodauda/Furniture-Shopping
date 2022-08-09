import {createSlice} from '@reduxjs/toolkit';
// import USER from '@data/user'

const initialState = {
  name: '',
  email: '',
  password: '',
  image: require('@assets/images/users/user1.png'),
  orders: [],
  shippingAddresses: [],
  paymentMethods: [],
  reviews: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => {
      const {name, email, password} = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
    },
    addShippingAddress: (state, action) => {
      const {fullName, address, country, city, postalCode} = action.payload;
      const newAddress = {
        id: state.shippingAddresses.length + 1,
        fullName,
        address,
        country,
        city,
        postalCode,
      };
      state.shippingAddresses.push(newAddress);
    },
    addPaymentMethod: (state, action) => {
      const {name, cardNumber, cvv, expDate} = action.payload;
      const newPaymentMethod = {
        id: state.shippingAddresses.length + 1,
        name,
        cardNumber,
        cvv,
        expDate,
      };
      state.paymentMethods.push(newPaymentMethod);
    },
  },
});

export const {signUp, addShippingAddress, addPaymentMethod} = userSlice.actions;
export default userSlice.reducer;
