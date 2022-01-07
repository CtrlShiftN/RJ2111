import React from "react";
class Student extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: "Quan", age: 18}
    }
    render(){
        return (<div>
            {this.state.name} - {this.state.age}
            <hr/>
            <button onClick={this.modifyName}>Click here</button>
        </div>)
    }
    modifyName = () => {
        this.setState({name: "Minh"})
    }
}
export default Student;