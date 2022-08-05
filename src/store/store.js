import {configureStore} from '@reduxjs/toolkit'
import productsReducer from './slices/products'
import userReducer from './slices/user'

export const store = configureStore({
    reducer: {
			products: productsReducer,
			user: userReducer
    }
})