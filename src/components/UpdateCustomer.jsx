import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, FloatingLabel, Button, Modal } from 'react-bootstrap';
import NavBar from './NavBar';

const UpdateCustomer = ({ customerId }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/customers/${customerId}`);
                const { name, email, phone } = response.data;
                setFormData({ name, email, phone });
            } catch (error) {
                console.error('Error fetching customer details:', error);
            }
        };
        fetchCustomer();
    }, [customerId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/customers/${customerId}`, formData);
            console.log('Customer updated successfully');
        } catch (error) {
            console.error('Error updating customer:', error);
        }
    };

    return (
        <div>
        <NavBar />
        <h2>Update Customer</h2>
        <Form className='p-4 border rounded shadow mx-auto my-4 w-75'onSubmit={handleSubmit}>
            <FloatingLabel
            controlId="floatingInput"
            label="Name"
            >
                <Form.Control type="text" name='name' value={formData.name} onChange={handleChange} placeholder="Enter Name" />
            </FloatingLabel>
            <FloatingLabel controlId="phone" label="Phone" className="my-3">
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email">
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
            </FloatingLabel>
            <Button type="submit"  className="mt-3" variant="outline-success">Update</Button>
        </Form>

    </div>
    );
};

export default UpdateCustomer;
