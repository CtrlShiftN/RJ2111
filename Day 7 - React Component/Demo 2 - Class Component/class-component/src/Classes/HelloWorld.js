import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    render() {
        return <p>Hello, {this.props.greetName}!</p>;
    }
}

export default HelloWorld;