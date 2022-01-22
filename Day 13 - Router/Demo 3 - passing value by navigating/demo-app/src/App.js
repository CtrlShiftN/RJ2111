import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>

        <hr />
        <div className="main-route-place">
          <Routes>
            <Route exact path='/category' element={<Category />} />
            <Route path='/product/:categoryID' element={<Product />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
