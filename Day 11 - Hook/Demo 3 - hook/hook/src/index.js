import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import useFetch from './components/useFetch';
import { useDate } from './components/Clock';

// useFetch
// const Home = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };


// current time
const Clock = () =>{
  const now = useDate();
  return (
    <div>
      <p>{now.date} {now.time} {now.wish}</p>
    </div>
  )
}

ReactDOM.render(<Clock />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
