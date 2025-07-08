import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const appStore = configureStore({
  // add slice to store

  reducer: {
    cart: cartReducer, 
  },
});

export default appStore;