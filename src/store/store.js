import userReducer from "./userReducer";
import { combineReducers, createStore } from "redux";
var store = new createStore(combineReducers({user:userReducer}))
export default store