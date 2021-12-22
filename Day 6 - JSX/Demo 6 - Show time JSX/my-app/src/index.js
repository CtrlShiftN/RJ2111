import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const time = () => {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getUTCDate();

  let hour = date.getUTCHours() + 7;
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();

  let element = (
    <h1>{hour}:{minute}:{second} - {day}/{month}/{year}</h1>
  );

  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(time, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
