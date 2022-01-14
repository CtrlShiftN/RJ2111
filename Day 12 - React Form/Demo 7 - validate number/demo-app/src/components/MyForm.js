import React, { useState } from 'react'

function MyForm() {
    // khai báo state
    const [state, setState] = useState({
        username: '',
        age: null
    });

    // hàm xử lý mỗi khi nhập vào ô input
    const handleChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        if (name == "age") { // kiểm tra trường nhập vào ở ô input của age
            if (!Number(val)) { // nếu giá trị khi thay đổi k phải là số
                // alert("Your age must be a number"); // báo lỗi
                document.getElementById('error-block').innerText = "Your age must be a number"; // báo lỗi
            } else {
                document.getElementById('error-block').innerText = "";
            }
        }
        setState({ [name]: val }); // set giá trị
    }

    return (
        <form>
            <h1>Info: {state.username} - {state.age}</h1>
            <input type='text' name='username' onChange={handleChange} />
            <p>Enter your age:</p>
            <input type='text' name='age' onChange={handleChange} />
            <p id='error-block'></p>
        </form>
    )
}
export default MyForm;