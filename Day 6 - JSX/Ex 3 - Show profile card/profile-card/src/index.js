import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

// Khoi tao card
const element = (
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src="./images/logo.jpg" alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Ngô Văn Quyền</p>
          <p className="text-sub">
          Đây là một vài mô tả về tôi!
          </p>
          <a href="https://www.facebook.com/thedoctor2404" className="btn btn-info third" >FOLLOW</a>
        </div>
      </div>
    </div>
  </div>
);

// render
ReactDOM.render(element, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
