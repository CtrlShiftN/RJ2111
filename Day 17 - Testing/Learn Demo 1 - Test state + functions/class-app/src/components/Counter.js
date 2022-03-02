import { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState(({ count }) => ({ count: count + 1 }));
    }

    decrement() {
        this.setState(({ count }) => ({ count: count - 1 }));
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <div ref='anyRef' className="count">Count: {count}</div>
                <button type="button" className="inc" onClick={this.increment}>Increment</button>
                <button type="button" className="dec" onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}