
import booksReducer from '../features/books/bookSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    books: booksReducer
}
})
export default store;