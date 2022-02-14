import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/users/list')
            .then((res) => {
                this.setState({ users: res.data })
            })
            .catch((err) => { throw err })
    }
    render() {
        const { users } = this.state;
        return (
            <div className="user-list container">
                <table className="table table-success table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ và tên</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td><a href={`users/${user.id}`}><button>Edit</button></a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <a href="/user/add"><button>Create</button></a>
            </div>
        )
    }
}