import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const OrderDetails = ({ orderId }) => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/orders/${orderId}`);
                setOrder(response.data);
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };
        fetchOrder();
    }, [orderId]);

    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <NavBar />
            <h2>Order Details</h2>
            <p>Order ID: {order.id}</p>
            <p>Order Date: {order.orderDate}</p>
            <p>Customer ID: {order.customerId}</p>
            <p>Product IDs: {order.productIds.join(', ')}</p>
        </div>
    );
};

export default OrderDetails;
