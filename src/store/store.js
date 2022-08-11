import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  PERSIST,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import productsReducer from './slices/products';
import userReducer from './slices/user';
import notificationReducer from './slices/notification';
import cartReducer from './slices/cart';
import favouriteReducer from './slices/favourite';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    user: persistReducer(persistConfig, userReducer),
    notification: persistReducer(persistConfig, notificationReducer),
    cart: persistReducer(persistConfig, cartReducer),
    favourite: persistReducer(persistConfig, favouriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
