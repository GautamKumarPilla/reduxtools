
import { booksReducer } from "../features/books/booksSlice";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    books: booksReducer
}
})
