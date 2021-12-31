import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// demo without function
// ReactDOM.render(
//   (
//     <div className='hello'>
//       <p>Hello, Batman!</p>
//       <p>Hello, Iron Man!</p>
//       <p>Hello, Nicholas Cage!</p>
//       <p>Hello, Mega Man!</p>
//       <p>Hello, Bono!</p>
//       <p>Hello, Catwoman!</p>
//     </div>
//   ),
//   document.getElementById('root')
// );

// demo with function
// const names = ['Batman', 'Iron Man', 'Nicholas Cage', 'Mega Man', 'Bono', 'Catwoman'];

// // camelCase, PascalCase, snake_case
// function Hello() {  // note: this function name should named as Pascal case
//   return (
//     names.map((name) => {
//       return (<p>Hello, {name}!</p>)
//     })
//   );
// }
// ReactDOM.render(
//   (
//     <Hello />
//   ),
//   document.getElementById('root')
// );

// demo su dung props
function Hello(props) {  // note: this function name should named as Pascal case
      return (<p>Hello, {props.yourAge}!</p>);
}
ReactDOM.render(
  (
    <Hello yourName="Nguyen" yourAge="18" />
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
