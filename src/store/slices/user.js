import {createSlice} from '@reduxjs/toolkit'
// import USER from '@data/user'

const initialState = {
  name: '',
  email: '',
  password: '',
  image: require('@assets/images/users/user1.png'),
  orders: [],
  shippingAddresses: [],
  paymentMethods: [],
  reviews: []
};

export const userSlice = createSlice({
  name: 'user',
	initialState,
  reducers: {
    signUp: (state, action) => {
      const { name, email, password } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
    }
  }
})

export const {signUp} = userSlice.actions
export default userSlice.reducer