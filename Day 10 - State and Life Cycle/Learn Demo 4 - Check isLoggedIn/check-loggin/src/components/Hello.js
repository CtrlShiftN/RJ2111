import React from "react";
class Hello extends React.Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Welcome</h1>
                    <button onClick={this.props.onEventHandle}>Log out</button>
                </div>
            </div>
        )
    }
}

export default Hello;