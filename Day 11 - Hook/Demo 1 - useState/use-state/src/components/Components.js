import React from 'react';
class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: 'no load' }
    }
    // ham xu ly khi su dujng state, thay doi gia tri trong state
    onClick = () => {
        this.setState({
            isLoading: 'loading...'
        })
    }
    render() {
        return (
            <div className='container'>
                <button onClick={this.onClick}>Click here</button>
                <p>{this.state.isLoading}</p>
            </div>

        )
    }
}
export default ComponentA;