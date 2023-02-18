import React from "react"
import { productsReducer } from "../features/products/productSlice";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    products: productsReducer
} })

// export default store;