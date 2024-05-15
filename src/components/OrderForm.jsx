import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import NavBar from './NavBar';

const OrderForm = () => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [orderDate, setOrderDate] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchCustomers();
        fetchProducts();
    }, []);

    const handleChangeCustomer = (e) => {
        setSelectedCustomer(e.target.value);
    };

    const handleChangeProducts = (e) => {
        const selectedProductIds = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedProducts(selectedProductIds);
    };

    const handleChangeOrderDate = (e) => {
        setOrderDate(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/orders', {
                customerId: selectedCustomer,
                productIds: selectedProducts,
                orderDate: orderDate
            });
            console.log('Order placed successfully:', response.data);
            setMessage('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            setMessage('Error placing order. Please try again.');
        }
    };

    return (
        <div>
            <NavBar />
            <h2>Place Order</h2>
            <Form className='p-4 border rounded shadow mx-auto'onSubmit={handleSubmit}>
                <Form.Group controlId="customer">
                    <Form.Label>Customer:</Form.Label>
                    <Form.Control as="select" value={selectedCustomer} onChange={handleChangeCustomer}>
                        <option value="">Select a customer</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.id}>{customer.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="products">
                    <Form.Label>Products:</Form.Label>
                    <Form.Control as="select" multiple onChange={handleChangeProducts}>
                        {products.map(product => (
                            <option key={product.id} value={product.id}>{product.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="orderDate">
                    <Form.Label>Order Date:</Form.Label>
                    <Form.Control type="date" value={orderDate} onChange={handleChangeOrderDate} />
                </Form.Group>
                <Button type="submit">Place Order</Button>
            </Form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default OrderForm;
