import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Users.css";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = () => {
        axios.get('http://localhost/sydney/categories.php')
            .then(function(response) {
                console.log(response.data); // Check the format of response.data
                if (Array.isArray(response.data)) {
                    setCategories(response.data);
                } else {
                    console.error('Response data is not an array:', response.data);
                    setCategories([]); // Set categories to empty array to avoid map error
                }
            })
            .catch(function(error) {
                console.error('Error fetching categories:', error);
                setCategories([]); // Set categories to empty array on error
            });
    }

    return (
        <>
            <div className="users">
                <h1>Categories</h1>
                <table className="table">
                    <thead className="t-head">
                        <tr className="table-r">
                            <th className="th">#</th>
                            <th className="th">Name</th>
                            <th className="th">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>
                                    <Link to={`/categories/${category.id}/edit`}>Edit</Link>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Categories;
