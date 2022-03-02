import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App container">
      <h1 id='counterVal'>{counter}</h1>
      <button id='increaseBtn' className='btn btn-success' onClick={(e) => setCounter(counter + 1)}>Increase</button>
      <button id='decreaseBtn' className='btn btn-danger' onClick={(e) => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}

export default App;
