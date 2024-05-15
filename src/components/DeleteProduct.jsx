import React from 'react';
import axios from 'axios';

const DeleteProduct = ({ productId }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/products/${productId}`);
            console.log('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default DeleteProduct;
