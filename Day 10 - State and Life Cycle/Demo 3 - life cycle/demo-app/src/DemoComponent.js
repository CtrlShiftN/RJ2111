import React from "react";
class DemoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: 'hello' }
    }
    componentWillMount() {
        console.log('willMount đã chạy');
    }
    componentDidMount() {
        console.log('didmount đã chạy');
    }
    changeMsg = () => {
        this.setState({ msg: 'Ahihi' })
    }
    render() {
        console.log('render da chay');
        return (
            <div><button onClick={this.changeMsg}>Change msg</button>
                {this.state.msg}</div>

        )
    }
}
export default DemoComponent;