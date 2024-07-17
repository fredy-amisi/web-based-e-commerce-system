import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Users.css";

const Getenrollers = () => {
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        getEnrollments();
    }, []);

    function getEnrollments() {
        axios.get('http://localhost/bridge/Enrolment_fetch.php')
            .then(function(response) {
                console.log(response.data); // Check the response data here
                setEnrollments(response.data);
            })
            .catch(function(error) {
                console.error('Error fetching enrollments:', error);
            });
    }

    return (
        <>
            <div className="enrollments">
                <h1>Enrollments</h1>
                <table className="table">
                    <thead className="t-head">
                        <tr className="table-r">
                            <th className="th">#</th>
                            <th className="th">Student Name</th>
                            <th className="th">Email</th>
                            <th className="th">Course Name</th>
                            <th className="th">Enrollment Date</th>
                            <th className="th">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment, key) =>
                            <tr key={key}>
                                <td>{enrollment.id}</td>
                                <td>{enrollment.student_name}</td>
                                <td>{enrollment.email}</td>
                                <td>{enrollment.course_name || "N/A"}</td> {/* Display "N/A" if course_name is undefined */}
                                <td>{enrollment.enrollment_date}</td>
                                <td>
                                    <Link to={`enrollment/${enrollment.id}/edit`}>Edit</Link>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Getenrollers;
