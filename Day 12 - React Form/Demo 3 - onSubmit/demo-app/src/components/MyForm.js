import React, { useState } from 'react';

const MyForm = () => {
    const [username, setUsername] = useState('');

    // xử lý sự kiện khi nhấn nút submit
    const submitHandler = (event) => {
        // chặn luồng event mặc định
        event.preventDefault();
        // xử lý dữ liệu
        alert("You are submitting " + username);
    };
    // xử lý sự kiện khi nhập văn bản vào ô input
    const handleChange = (event) => setUsername(event.target.value);

    return (
        <form onSubmit={submitHandler}>
            <h1>Hello {username}</h1>
            <p>Enter your name, and submit:</p>
            <input type='text' onChange={handleChange} />
            <input type='submit' />
        </form>
    );
}
export default MyForm;
