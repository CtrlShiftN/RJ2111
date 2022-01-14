import { useState } from 'react';
function Login() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    const login = () => {
        let msg = 'Your username =' + username + ", password = " + password;
        alert(msg);
    }
    let updateDom = () => {
        document.getElementById('username').innerText = username;
    }
    return (
        <div className="container">
            <input onChange={(e) => { setUsername(e.target.value) }} type="email" placeholder="Enter your username"></input>
            <br />
            <input onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Enter your password"></input>
            <br />
            <button onClick={() => updateDom()}>Login</button>
            <h1 id='username'></h1>
        </div>
    )
}
export default Login;