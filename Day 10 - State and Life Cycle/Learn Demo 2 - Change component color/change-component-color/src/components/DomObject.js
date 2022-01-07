import React from 'react';
class DomObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'black' }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'pink' });
        }, 5000);
    }

    render() {
        return (
            <div className="demo-content">
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: 'auto'
                    }}
                />
            </div>
        );
    }
}
export default DomObject;