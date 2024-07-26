import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Users.css";

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/sydney/users')
            .then(function(response) {
                console.log(response.data);
                setUsers(response.data);
            })
            .catch(function(error) {
                console.error('Error fetching users:', error);
            });
    }

    const printReport = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Report</title>');
        printWindow.document.write('<link rel="stylesheet" href="/path/to/your/Users.css">'); // Ensure this path is correct
        printWindow.document.write('</head><body >');
        printWindow.document.write(document.querySelector('.users').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    return (
        <>
            <div className="users">
                <h1>Users</h1>
                <button onClick={printReport} className="print-button">
                    Print Report
                </button>
                <table className="table">
                    <thead className="t-head">
                        <tr className="table-r">
                            <th className="th">#</th>
                            <th className="th">Name</th>
                            <th className="th">Email</th>
                            <th className="th">Username</th>
                            <th className="th">ROLE</th>
                            <th className="th">Phone Number</th>
                            <th className="th">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, key) =>
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.signin_date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Admin;
