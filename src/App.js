import logo from './logo.svg';
import './App.css';
import { Provider } from 'react';
import store from './app/store'
import Products from './features/products/Products';

function App() {
  return (
    <Provider store={store}>
      <div>
      <h1></h1>
      <Products/>
      </div>
    </Provider>
    
  );
}

export default App;