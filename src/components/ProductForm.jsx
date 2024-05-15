import React, { useState } from 'react';
import axios from 'axios';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import NavBar from './NavBar';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', formData);
            console.log('Product created successfully');
            
            setFormData({
                name: '',
                price: ''
            });
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div>
        <NavBar />
        <h2>Add Product</h2>
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

export default ProductForm;
