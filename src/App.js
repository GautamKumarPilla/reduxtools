import logo from './logo.svg';
import './App.css';
import store from './app/services/store';
import Books from './app/features/books/Books';
import { Provider } from 'react-redux';

function App() { 
  return (
<Provider store={store}>
    <div>
     <Books/>
    </div>
</Provider>
    
  );
}

export default App;
