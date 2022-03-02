import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const getSum = (a, b) => {
  return parseFloat(a) + parseFloat(b);
}

function App() {
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState("");
  const [sum, setSum] = useState(0);


  const add = () => {
    const result = getSum(valueOne, valueTwo)
    setSum(result);
  };

  return (
    <form>
      <input type="number" id="value-one-input" name="valueOne" value={valueOne} onChange={e => setValueOne(e.target.value)} />
      <input type="number" id="value-two-input" name="valueTwo" value={valueTwo} onChange={e => setValueTwo(e.target.value)} />
      <button type="button" onClick={add} aria-label="Add">Add</button>
      <p className="result">{sum}</p>
    </form>
  );
}
export { getSum };
export default App;
