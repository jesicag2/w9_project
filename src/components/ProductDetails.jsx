import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

const ProductDetails = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <NavBar />
            <h2>Product Details</h2>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
        </div>
    );
};

export default ProductDetails;
