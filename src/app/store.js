import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todosReducer from '../features/todolist/todolistSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer
  },
})

// export const store = configureStore({
//   reducer:{
//     todos: todosReducer
//   }
// })