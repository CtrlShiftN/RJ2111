import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Demo 1

// // JS func to format a name
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// // an user object
// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h4>
//     Hello, {formatName(user)}!
//   </h4>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Demo 2
const cars = ["MG Hector", "Hyundai Venue", "Toyota Fortuner", "Hyundai Creta"];
			  
const carList = cars.map((car) =>
			<li key={car.toString()}>{car}</li>
		);

function Vehicles() {
	return <ul>{carList}</ul>
}

const element = (Vehicles());

ReactDOM.render(element, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
