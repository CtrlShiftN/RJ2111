import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import loginRedux from './../redux/actions';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState({ username: "", password: "" });
    const userlogin = useSelector(state => state.userlogin)
    const navigate = useNavigate()
    const setValueForUser = (key, value) => {
        const newVal = { ...user, [key]: value };
        setUser(newVal);
    }
    const dispatch = useDispatch();
    function login() {
        dispatch(loginRedux(user))
    }
    useEffect(() => {
        if (userlogin.username) {
            navigate('/user')
        }
    }, [userlogin])
    return (
        <div className="login-form container pt-5">
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setValueForUser('username', e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setValueForUser('password', e.target.value)}></input>
                </div>
                <button onClick={() => { login() }} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}