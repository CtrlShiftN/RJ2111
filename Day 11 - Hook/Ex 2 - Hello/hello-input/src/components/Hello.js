import React, { useState, useEffect } from 'react';
function Hello() {
    let [name, setName] = useState('');
    useEffect(() => { setName(name) }, [name]);
    return (
        <div className='container'>
            <input onChange={(e) => {
                setName(e.target.value)
            }}></input>
            <p>Hello, {name}!</p>
        </div>
    )
}
export default Hello;