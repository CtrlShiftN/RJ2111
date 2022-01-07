import React from 'react';
class Hello extends React.Component {
    componentWillUnmount() {
        alert('Component is going to unmount');
    }
    render() {
        return <h1>Hello World...</h1>
    }
}
export default Hello;