import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Users from '../Pages/Users';
import Orders from './Orders';
import AddProduct from './AddProduct';
import AddCategory from './AddCategory';
import Categories from './Categories';
import '../Css/AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div className="admin_dashboard">
            <nav id="nav">
                <div className="adm_cont">
                    <h1>Welcome Sysy</h1> 
                    <div className="oval"></div>
                    <img className="t1" src="" alt="adm"/> 
                </div>
                <div className="dashb">
                    <h1>Admin Dashboard</h1>
                    <hr id="hr"/>
                </div>
                <ul>
                    <li><NavLink to="users" className={({ isActive }) => (isActive ? 'active' : '')}><span>Users</span></NavLink></li>
                    <li><NavLink to="Orders" className={({ isActive }) => (isActive ? 'active' : '')}><span>Orders</span></NavLink></li>
                    <li><NavLink to="Categories" className={({ isActive }) => (isActive ? 'active' : '')}><span>Categories</span></NavLink></li>
                    <li><NavLink to="AddProduct" className={({ isActive }) => (isActive ? 'active' : '')}><span>Add New Product</span></NavLink></li>
                    <li><NavLink to="AddCategory" className={({ isActive }) => (isActive ? 'active' : '')}><span>Add New Category</span></NavLink></li>
                </ul>
            </nav>
           
            <div className="admin-content">
                <Routes>
                    <Route path="/" element={<Users />} />
                    <Route path="users" element={<Users />} />
                    <Route path="Orders" element={<Orders />} />
                    <Route path="AddProduct" element={<AddProduct />} />
                    <Route path="AddCategory" element={<AddCategory />} />
                    <Route path="Categories" element={<Categories />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
