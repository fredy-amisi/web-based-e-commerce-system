import React, { useState, useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import '../Css/AdminDashboard.css'; 
import AddProduct from './AddProduct';

const FarmersDashboard = () => {
    const [farmerName, setFarmerName] = useState('');

    useEffect(() => {
        const fetchFarmerName = async () => {
            try {
                const response = await axios.get('http://localhost/sydney/GetFarmerName.php', {
                    params: {
                        // Assuming you have some way to identify the logged-in farmer
                        userId: 17 // Replace with actual user ID
                    }
                });
                if (response.data.success) {
                    setFarmerName(response.data.name);
                } else {
                    console.error('Failed to fetch farmer name:', response.data.error);
                }
            } catch (error) {
                console.error('Error fetching farmer name:', error);
            }
        };

        fetchFarmerName();
    }, []);

    return (
        <div className="admin_dashboard">
            <nav id="nav">
                <div className="adm_cont">
                    <h1>{farmerName}</h1> 
                    <div className="oval"></div>
                    <img className="t1" src="" alt="farmer"/> 
                </div>
                <div className="dashb">
                    <h1>Farmers Dashboard</h1>
                    <hr id="hr"/>
                </div>
                <ul>
                    <li><NavLink to="AddProduct" className={({ isActive }) => (isActive ? 'active' : '')}><span>Add Products</span></NavLink></li>
                </ul>
            </nav>
           
            <div className="admin-content">
                <Routes>
                    <Route path="/" element={<AddProduct />} />
                    <Route path="AddProduct" element={<AddProduct />} />
                </Routes>
            </div>
        </div>
    );
};

export default FarmersDashboard;
