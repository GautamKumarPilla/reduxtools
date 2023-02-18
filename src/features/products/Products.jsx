import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../app/services";

function Products(){
  var products = useSelector(state=>state.products.products)
  var dispatch = useDispatch();
  useEffect(() =>{
    dispatch(GetProducts())
  },[])
  return(
    <div>
        <h1>Amazon</h1>
        <b>
          {
            products && products.map((product)=>{
              return <li className="p-2 border border-danger m-2">{product.title}</li>
            })
          }
        </b>
    </div>
  )
}

export default Products;