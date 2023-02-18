import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBooks } from "./bookSlice";

function Books(){
  var books = useSelector(state=>state.books.books)
  var dispatch = useDispatch();
  useEffect(()=>{
     dispatch(GetBooks())
  },[])
    return(
        <div>
         <h1>Books</h1>
         <ul className="d-flex flex-wrap border">
         {
         books && books.map((book,i)=>{
          return <li className="w-25">{book.title}</li>
         })
} 
         </ul>
        </div>
    )
}

export default Books;