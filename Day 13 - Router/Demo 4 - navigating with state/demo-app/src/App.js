import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Category } from './components/Category';
import { Product } from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Category />}></Route>
        <Route path='/product/:selectedID' element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
