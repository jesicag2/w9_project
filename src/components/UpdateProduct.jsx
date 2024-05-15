import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateProduct = ({ productId }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products/${productId}`);
                const { name, price } = response.data;
                setFormData({ name, price });
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/products/${productId}`, formData);
            console.log('Product updated successfully');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
        <NavBar />
        <h2>Update Product</h2>
        <Form className='p-4 border rounded shadow mx-auto my-4 w-75'onSubmit={handleSubmit}>
            <FloatingLabel controlId="name" label="Product Name" className="my-3">
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Product Name" />
            </FloatingLabel>
            <FloatingLabel controlId="price" label="Price" className="my-3">
                <Form.Control type="text" name="nampricee" value={formData.price} onChange={handleChange} placeholder="Enter Product Price" />
            </FloatingLabel>
            <Button type="submit"  className="mt-3" variant="outline-success">Add Product</Button>
        </Form>

    </div>
    );
};

export default UpdateProduct;
