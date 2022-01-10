import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponentA from './components/Components';

// render with stateful (class)
// ReactDOM.render(
//   <React.StrictMode>
//     <ComponentA />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// render with stateless
function Hello() {
    let [isLoading, setIsLoading] = useState('no load');
    return (
        <div>
            <button onClick={() => {
                setIsLoading('loading')
            }}>Click me
            </button>
            <p>{isLoading}</p>
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Hello/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
