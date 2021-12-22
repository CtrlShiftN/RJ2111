import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function AddComponent(props) {
  return (
    <h1>Total: {props.firstNumber + props.secondNumber}</h1>
  );
}

// demo string
// ReactDOM.render(
//   (
//     <AddComponent firstNumber="1" secondNumber="2" />
//   ),
//   document.getElementById('root')
// );

// demo integer
ReactDOM.render(
  (
    <AddComponent firstNumber={1} secondNumber={2} />
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
