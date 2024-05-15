import React, { useState,  } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; 
import { Form, FloatingLabel, Button, Modal } from 'react-bootstrap';

import NavBar from './NavBar';

function CustomerForm() {
    const { id } = useParams();
    const [customerData, setCustomerData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState(''); 
    

    const handleClose = () => setShow(false);
    
    const handleChange = (event) => {
        event.preventDefault();
        let { name, value } = event.target; 
        const newData = { ...customerData}
        for (let [key, val] of Object.entries(newData)) {
            if (key == name) {
                newData[key] = value
            }
        }
        console.log(newData)
        setCustomerData(newData)
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let response = null
        if (id) {
            response = await axios.put(`http://localhost:5000/customers/${id}`, {
                body: customerData,
            })
            console.log(response.data) 
            setMessage('Successfully Updated User!')
        } else {
            response = await axios.post(`http://localhost:5000/customers`, {
                body: customerData
            })
            console.log(response.data)
            setMessage('Successfully Created New User!')
        }
        
        if (response.status == 200){
            setShow(true)   
        } else {
            setShow(true)
            setMessage('Error Processing Your Request. Please Try Again')
        }
    }
    
  return (
    <div>
        <NavBar />
        <h2>Add Customer</h2>
        <Form className='p-4 border rounded shadow mx-auto my-4 w-75'onSubmit={handleSubmit}>
            <FloatingLabel
            controlId="floatingInput"
            label="Name"
            >
                <Form.Control type="text" name='name' value={customerData.name} onChange={handleChange} placeholder="Enter Name" />
            </FloatingLabel>
            <FloatingLabel controlId="phone" label="Phone" className="my-3">
                <Form.Control type="text" name="phone" value={customerData.phone} onChange={handleChange} placeholder="Enter Phone Number" />
            </FloatingLabel>
            <FloatingLabel controlId="email" label="Email">
                <Form.Control type="email" name="email" value={customerData.email} onChange={handleChange} placeholder="Enter Email" />
            </FloatingLabel>
            <Button type="submit"  className="mt-3" variant="outline-success">Add New Customer</Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>SUCCESS!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo! {message} </Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default CustomerForm
