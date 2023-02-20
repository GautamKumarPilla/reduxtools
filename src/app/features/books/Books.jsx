import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBook, GetBooks } from "./bookSlice";

function Books(){
  var books = useSelector(state=>state.books.books)
  const[newbook,setnewbooks] = React.useState({
    title:'',
    authors:''
  })
  var dispatch = useDispatch();
  useEffect(()=>{
     dispatch(GetBooks())
  },[])
    return(
        <div>
         <h1>Books</h1>
         <label>Title</label>
         <input type="text" onKeyUp={(a)=>{setnewbooks({...newbook,title:a.target.value})}}/> <br/>
         <label>Author</label>
         <input type="text" onKeyUp={(a)=>{setnewbooks({...newbook,authors:a.target.value})}}/> <br/>
         <button onClick={()=>{dispatch(AddBook(newbook))}}>Add-Book</button>
         <ul className="d-flex flex-wrap justify-content-around border border-2 m-3 border-primary">
         {
         books && books.map((book,i)=>{
          return <li className="w-25 border p-3">
            {book.title} <br />
            <b>{book.authors}</b></li>
         })
} 
         </ul>
        </div>
    )
}

export default Books;