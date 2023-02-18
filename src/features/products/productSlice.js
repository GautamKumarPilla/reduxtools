import { createSlice } from "@reduxjs/toolkit";
import { GetProducts } from "../../app/services";

export const productSlice = createSlice({
   name:'products',
   initialState:{
    products:[]
   },
   extraReducers:{
   [GetProducts.fulfilled]:(state,action) =>{
      state.products=action.payload
   }
   }
})

export default productSlice.reducer;
