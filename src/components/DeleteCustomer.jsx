import React from 'react';
import axios from 'axios';

const DeleteCustomer = ({ customerId }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/customers/${customerId}`);
            console.log('Customer deleted successfully');
        } catch (error) {
            console.error('Error deleting customer:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteCustomer;
