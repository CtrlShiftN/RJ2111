import React from 'react';
class PromtKey extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keypressed: ''
        };
    }

    handler = (e) => {
        this.setState({ keypressed: e.key });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Key pressed is: {this.state.keypressed}</p>
                <input type="text" onKeyPress={(e) => this.handler(e)} />
            </div>
        )
    }
}
export default PromtKey;