import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fruits = ['Apple', 'Watermelon', 'Orange', 'Lemon'];

let element = (
  <div className='fruit-list'>
    <h1>List of fruits</h1>
    <ol>
      {fruits.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  </div>
);

// render
ReactDOM.render(element, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
