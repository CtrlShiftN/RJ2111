import { Component } from 'react';
export default class Toggler extends Component {
    constructor(...args) {
        super(...args);
        this.state = { on: false };
    }

    toggle() {
        this.setState(({ on }) => ({ on: !on }));
    }

    render() {
        const { on } = this.state;
        return (<div id="toggleState">{on ? 'on' : 'off'}</div>);
    }
}