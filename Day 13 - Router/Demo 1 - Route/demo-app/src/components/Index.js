import React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
const MyView = () => {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contract</Link>
                    </li>
                </ul>

                <hr />
                <div className="main-route-place">
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default MyView;