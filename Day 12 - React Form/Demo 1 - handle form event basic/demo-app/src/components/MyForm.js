import React from 'react';
import { useState } from 'react';
const MyForm = () => {
    let [name, setName] = useState('');

    const handleEvent = (e) => {
        setName(e.target.value);
    }

    return (
        <form>
            <h1>Hello {name}</h1>
            <input placeholder="Enter your name" onChange={handleEvent}></input>
        </form>
    )
}
export default MyForm;