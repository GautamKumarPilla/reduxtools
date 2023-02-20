import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetBooks = createAsyncThunk('/getbooks',async function(){
    var res = await fetch("http://localhost:4444/books")
    return (res.json())
}) 

export const AddBook = createAsyncThunk('/addbook',async(book)=>{
    var res = await fetch("http://localhost:4444/books",{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(book) // body data type must match "Content-Type" header
      })
         return res.json();    
})
export const booksSlice = createSlice({
    name:'books',
    initialState:{
        books: []
    },
    extraReducers:{
        [GetBooks.fulfilled]:(state,action)=>{
            state.books = action.payload;
        },
        [AddBook.fulfilled]:(state,action)=>{
          state.books.push(action.payload);
          console.log(action.payload)
        }
    }
})
export default booksSlice.reducer;