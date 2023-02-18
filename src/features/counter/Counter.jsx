import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
 function Counter(){
 var count = useSelector((state) => {return state.counter.count})
  var dispatch = useDispatch();

  return(
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button><br /><br /><br />
    </div>
  )
 }
 export default Counter;