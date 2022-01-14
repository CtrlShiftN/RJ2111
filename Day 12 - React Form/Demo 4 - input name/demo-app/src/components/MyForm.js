import React, { useState } from 'react';
const MyForm = () => {
    // Tạo state
    const [state, setState] = useState({
        username: '',
        age: null
    });
    // xử lý sự kiện khi submit
    const submitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + state.username);
    };
    // xử lý sự kiện khi ng dùng nhập vào các ô input
    const handleChange = (event) => setState({ [event.target.name]: event.target.value });

    return (
        <form onSubmit={submitHandler}>
            <h1>Hello {state.username} {state.age}</h1>
            <p>Enter your name:</p>
            <input type='text' name='username' onChange={handleChange} />
            <p>Enter your age:</p>
            <input type='text' name='age' onChange={handleChange} />
            <input type='submit'></input>
        </form>
    );
}
export default MyForm;

