import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Hello = (props) => {
  return (<h1>Hello, {props.greetName}!</h1>)
}

class Greeting extends React.Component{
  render(){
    return <p>Hello, {this.props.yourName}!</p>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Hello greetName="Nguyen" />
    <Greeting yourName="Hoang" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
