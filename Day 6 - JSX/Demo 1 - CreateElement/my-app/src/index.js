import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const items = ['C++', 'Java', 'PHP'];
const programming = React.createElement("section", { id: "coding" },
  React.createElement("h1", null, "Programming languages"),
  React.createElement("ul", { className: "coding" },
    items.map((coding, i) =>
      React.createElement("li", { key: i }, coding))));

ReactDOM.render(
  programming,
  document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
