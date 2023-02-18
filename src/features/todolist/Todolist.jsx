import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { isolated,dynamic } from './todolistSlice';

function Todolist(){
    var todos = useSelector((state) => {return state.todos.todos}) 
    var dispatch = useDispatch();

    return(
        <div>
         <input type="text" onChange={{}}/>
          <button onClick={() => {dispatch(dynamic())}}>Add Task</button>
          <ul>
            {
                todos.map((z) =>{
                   <li>{dispatch(isolated())}</li>
                })
            }
          </ul>
        </div>
    )
}
export default Todolist;