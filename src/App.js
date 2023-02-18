import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './app/store'
import Products from './features/products/Products';

function App() {
  return (
    <Provider store={store}>
       <div className='border border-3 p-3 bg-dark text-light border-danger'>
       <Products/>
       </div>
    </Provider>
    
  );
}

export default App; 