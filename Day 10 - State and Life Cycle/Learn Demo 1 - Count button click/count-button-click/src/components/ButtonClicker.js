import React from 'react';
class ButtonClicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }
    increase = () => {
        this.setState({ number: this.state.number + 1 })
    }
    decrease = () => {
        this.setState({ number: this.state.number - 1 })
    }
    render() {
        return (
            <div className='clicker'>
                <button className='btn btn-info mx-4' onClick={this.decrease}>-</button>
                {this.state.number}
                <button className='btn btn-info mx-4' onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default ButtonClicker;