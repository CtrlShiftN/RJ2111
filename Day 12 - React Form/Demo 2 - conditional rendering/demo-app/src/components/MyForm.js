import React, { useState } from 'react';
const MyForm = () => {
    const [username, setUsername] = useState('');
    // ham xu ly su kien
    const handleChange = (event) => setUsername(event.target.value)
    // khai bao 1 bien empty
    let header;
    // hai dieu kien de header co gia tri
    if (username) {
        header = <h1>Hello {username}</h1>;
    } else {
        header = '';
    }

    return (
        <div>
            <form>
                <p>Enter your name: {header}</p>
                <input type='text' value={username} onChange={handleChange} />
            </form>
        </div>
    )
}
export default MyForm;
