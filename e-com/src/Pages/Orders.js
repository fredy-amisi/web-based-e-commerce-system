import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/Users.css"; // Ensure this path is correct

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

    const printReport = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print Report</title>');
        printWindow.document.write('<link rel="stylesheet" href="/path/to/your/Users.css">'); // Ensure this path is correct
        printWindow.document.write('</head><body >');
        printWindow.document.write(document.querySelector('.orders').innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };

    return (
        <div className="orders">
            <h1>Orders</h1>
            <button onClick={printReport} className="print-button">
                Print Report
            </button>
            <table className="table">
                <thead className="t-head">
                    <tr className="table-r">
                        <th className="th">#</th>
                        <th className="th">Product</th>
                        <th className="th">Quantity</th>
                        <th className="th">Total Price</th>
                        <th className="th">Phone Number</th>
                        <th className="th">Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.id}>
                            <td>{index + 1}</td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.total_price}</td>
                            <td>{order.phone_number}</td>
                            <td>{order.order_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
