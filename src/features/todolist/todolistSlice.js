import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import React from "react";

const initialState = {
    todos : ['a','b','c','d'],
}
export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
     isolated : (state) => {
       state.todos = initialState.todos;
     },
    //  dynamic : (state) => {
    //   const [todos,setTodos] = useState([])   
    //      setTodos([...todos,state.todos]);
    //  }
    }
})

export const {isolated,dynamic} = todolistSlice.actions;
export default todolistSlice.reducer;