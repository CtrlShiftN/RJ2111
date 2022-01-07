import React from "react";
import Hello from "./Hello";
class DomObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLogIn = () => {
        this.setState({ isLoggedIn: true })
    }

    handleLogOut = () => {
        this.setState({ isLoggedIn: false })
    }

    render() {
        if (this.state.isLoggedIn) return (<Hello onEventHandle={this.handleLogOut} />)
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Please Log in</h1>
                    <button onClick={this.handleLogIn}>Log in</button>
                </div>
            </div>
        )
    }
}
export default DomObject;