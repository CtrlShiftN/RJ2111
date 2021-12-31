import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';

class Calculator extends React.Component{
    constructor(props){
        super();
        this.state = {firstNumber: 0, secondNumber: 0, operator: '', displayValue: ''}
    }
    render(){
        return (
            <Input type='number' placeholder='Enter the first number' onChange={(e) => {
                this.setState({firstNumber: e.target.value})
            }} />
        )
    }
}

export default Calculator;