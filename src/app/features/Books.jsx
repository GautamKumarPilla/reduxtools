import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBooks } from "./bookSlice";

function Books(){
  var books = useSelector(state=>state.books.books)
  var dispatch = useDispatch();
  useEffect(()=>{

  },[])
    return(
        <div>
       
        </div>
    )
}

export default Books;