import { createSlice } from "@reduxjs/toolkit";

 export const GetProducts = function(){
    fetch("https://fakestoreapi.com/products").then(res =>res.json())
 }

export const productSlice = createSlice({
   name:'products',
   initialState:{
    products:[]
   }
})

export const productsReducer = productSlice.reducer;