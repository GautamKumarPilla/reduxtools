import { createAsyncThunk } from "@reduxjs/toolkit"
export const GetProducts = createAsyncThunk( 'getalife',async function(){
    var res = await fetch("https://fakestoreapi.com/products") 
    return res.json()
  })