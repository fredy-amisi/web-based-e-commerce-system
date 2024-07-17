import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Css/Users.css"; // Update the import path if necessary

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios.get('http://localhost/sydney/orders.php') // Update URL as per your server configuration
            .then(response => {
                console.log(response.data);
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    };

    return (
        <div className="orders">
            <h1>Orders</h1>
            <table className="table">
                <thead className="t-head">
                    <tr className="table-r">
                        <th className="th">#</th>
                        <th className="th">Order ID</th>
                        <th className="th">Product</th>
                        <th className="th">Quantity</th>
                        <th className="th">Total Price</th>
                        <th className="th">Order Date</th>
                        <th className="th">Status</th>
                        <th className="th">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.order_id}</td>
                            <td>{order.cart_data}</td>
                            <td>{order.quantity}</td>
                            <td>{order.total_amount}</td>
                            <td>{order.order_date}</td>
                            <td>{order.status}</td>
                            <td>
                                <Link to={`order/${order.id}/edit`}>Edit</Link>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
