import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const CustomerDetails = ({ customerId }) => {
    const [customer, setCustomer] = useState(null);

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/customers/${customerId}`);
                setCustomer(response.data);
            } catch (error) {
                console.error('Error fetching customer details:', error);
            }
        };
        fetchCustomer();
    }, [customerId]);

    if (!customer) return <p>Loading...</p>;

    return (
        <div>
            <NavBar />
            <h2>Customer Details</h2>
            <p>Name: {customer.name}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
        </div>
    );
};

export default CustomerDetails;
