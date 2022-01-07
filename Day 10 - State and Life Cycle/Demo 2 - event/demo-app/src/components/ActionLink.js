import React from 'react';
class ActionLink extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        console.log('You have just clicked');
    }
    render(){
        return (
            <a href='abc.html' onClick={this.handleClick}>Click here</a>
        )
    }
}
export default ActionLink;