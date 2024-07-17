import React, { useState } from 'react';
import axios from 'axios';
import '../Css/add_stylist.css';

const AddCategory = () => {
    const [categoryData, setCategoryData] = useState({
        name: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategoryData({ ...categoryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', categoryData); // Check what is being sent
        try {
            const response = await axios.post('http://localhost/sydney/addcategory.php', {
                name: categoryData.name
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response.data); // Check the response received
            alert(response.data.message);
            if (response.data.success) {
                setCategoryData({ name: '' });
            }
        } catch (error) {
            alert('Error adding category: ' + error.message);
        }
    };
    

    return (
        <div className="add-stylist-container">
            <h2>Add New Category</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Category Name"
                    value={categoryData.name}
                    onChange={handleInputChange}
                    required
                />
                <button className="submit" type="submit">Add Category</button>
            </form>
        </div>
    );
};

export default AddCategory;
