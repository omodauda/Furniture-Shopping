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
import ordersReducer from './slices/orders';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  notification: notificationReducer,
  cart: cartReducer,
  favourite: favouriteReducer,
  orders: ordersReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
