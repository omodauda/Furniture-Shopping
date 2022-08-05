import {createSlice} from '@reduxjs/toolkit'
import USER from '@data/user'

const initialState = USER;

export const userSlice = createSlice({
  name: 'user',
	initialState,
	reducers: {}
})

export default userSlice.reducer