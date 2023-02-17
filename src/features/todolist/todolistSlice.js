import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : ['a','b','c','d'],
}
export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
     static : (state) => {
       state.todos = initialState.todos;
     },
     add : (state) => {
         setTodos([...todos,newtodos])
     }
    }
})