import productsReducer from '../features/products/productSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    products : productsReducer
  }
})

export default store;