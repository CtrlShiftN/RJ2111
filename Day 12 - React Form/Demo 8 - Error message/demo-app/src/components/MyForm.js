import React, { useState } from 'react'
function MyForm() {
    const [state, setState] = useState({
        username: '', age: null, errormessage: ''
    });
    const handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if (nam == "age") {
            if (val != "" && !Number(val)) {
                
                err = <strong>Your age must be a number</strong>;
            }
        }
        setState({ errormessage: err });
        // setState({ [nam]: val });
    }

    return (
        <form>
            <h1>Hello {state.username} - {state.age}</h1>
            <p>Enter your name:</p>
            <input type='text' name='username' onChange={handleChange} />
            <p>Enter your age:</p>
            <input type='text' name='age' onChange={handleChange} />
            {state.errormessage}
        </form>
    )
}
export default MyForm;