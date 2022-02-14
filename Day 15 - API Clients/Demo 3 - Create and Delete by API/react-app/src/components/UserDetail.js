import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function UserDetail() {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:3001/api/users/list`) // /:id not work
                .then((res) => {
                    setUser(res.data[userId - 1])
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [userId]);
    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e) {
        alert('Updated')
        // axios.post('http://localhost:3001/api/user', user)
        //     .then((res) => {
        //         alert("Updated")
        //     })
        //     .catch((err) => { throw err })
    }
    return (
        <div className="container">
            <h1>User details</h1>
            <form>
                <div>
                    <label>Id</label>
                    <input name="id" value={user.id || ''} onChange={handleChange} />
                </div>
                <div>
                    <label>Name</label>
                    <input name="name" value={user.name || ''} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}