import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function EffectDemo() {
  //State
  // component did mount
  const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
  const [title, setTitle] = useState('useEffectQ in Hooks');


  // // chua dung useEffect
  // console.log('useEffect has been called!'); 
  // // component did update
  // setFullName({ name: 'SonMc', familyName: 'CodeGym' });

  // useEffect(updating with componentDidUpdate, [gia tri theo doi])
  useEffect(() => {
    console.log('useEffect has been called!');
    setTitle('New Title')
  }, [title]);

  // component will unmount
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>Name: {fullName.name}</h3>
      <h3>Family Name: {fullName.familyName}</h3>
    </div>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <EffectDemo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
