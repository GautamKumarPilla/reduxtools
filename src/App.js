import React from "react";
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "./features/counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="border border-4 border-warning p-5 m-5">
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
