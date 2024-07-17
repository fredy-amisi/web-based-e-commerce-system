import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/add_stylist.css';

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: '',
        category: '', // Changed to select category by ID
        description: '',
        price: '' // New field for price
    });
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);

    // Fetch categories on component mount
    useEffect(() => {
        fetchCategories();
    }, []);

    // Function to fetch categories from backend
    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost/sydney/categories.php');
            setCategories(response.data); // Set categories state with fetched data
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('category', productData.category);
        formData.append('description', productData.description);
        formData.append('price', productData.price); // Append price to formData
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost/sydney/addproduct.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert(response.data.message);
            if (response.data.success) {
                setProductData({ name: '', category: '', description: '', price: '' }); // Reset fields
                setImage(null);
            }
        } catch (error) {
            alert('Error adding product: ' + error.message);
        }
    };

    return (
        <div className="add-stylist-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={productData.name}
                    onChange={handleInputChange}
                    required
                />
                <select
                    id="category"
                    name="category"
                    value={productData.category}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={productData.description}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    value={productData.price}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    required
                />
                <button id="submit" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
