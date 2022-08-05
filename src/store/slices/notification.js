import { createSlice } from '@reduxjs/toolkit'
import NOTIFICATIONS from '@data/notifications'

const initialState = NOTIFICATIONS

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {}
})

export default notificationSlice.reducer