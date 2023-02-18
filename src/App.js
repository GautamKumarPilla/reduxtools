import logo from './logo.svg';
import './App.css';
import Books from './app/features/Books'
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
