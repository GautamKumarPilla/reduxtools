import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

 export const GetProducts = createAsyncThunk( 'getalife',async function(){
   var res = await fetch("https://fakestoreapi.com/products") 
   return res.json()
 })

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