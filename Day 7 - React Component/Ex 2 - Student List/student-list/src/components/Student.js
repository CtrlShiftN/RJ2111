import React from 'react';

class Student extends React.Component {
    constructor() {
        super();
        this.obj = {
            students: [
                {
                    id: 1,
                    name: 'Nguyen Van A',
                    age: 30,
                    address: 'Thanh Xuan, Ha Noi'
                },
                {
                    id: 2,
                    name: 'Nguyen Van B',
                    age: 29,
                    address: 'Thanh Xuan, Ha Noi'
                },
            ]
        }
    }

    render() {
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.obj.students.map((student, index) => {
                        return (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

}
export default Student;