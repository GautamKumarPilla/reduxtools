import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "./productSlice";

function Products(){
  var dispatch = useDispatch();
  useEffect(() =>{
    dispatch(GetProducts())
  },[])
  return(
    <div>
        <h1>Amazon</h1>
    </div>
  )
}

export default Products;