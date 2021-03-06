import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component{
    render(){
        return <input type={this.props.type} onChange={this.props.onChange} placeholder={this.props.placeholder}></input>;
    }
}

export default Input;