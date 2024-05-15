import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';

import CustomerForm from './components/CustomerForm';
import CustomerDetails from './components/CustomerDetails';
import UpdateCustomer from './components/UpdateCustomer';
import DeleteCustomer from './components/DeleteCustomer';

import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

import OrderForm from './components/OrderForm';
import OrderDetails from './components/OrderDetails';


function App(){
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<CustomerForm /> } /> 
        <Route path='/customers/:customerId' element={<CustomerDetails />} />
        <Route path='/customers/update/:customerId' element={<UpdateCustomer />} />
        <Route path='/customers/delete/:customerId' element={<DeleteCustomer /> } />

        <Route path='/products' element={<ProductList />} />
        <Route path='/products/add' element={<ProductForm />} />
        <Route path='/products/:productId' element={<ProductDetails /> } /> 
        <Route path='/products/update/:productId' element={<UpdateProduct />} />
        <Route path='/products/delete/:productId' element={<DeleteProduct />} />

        <Route path='/orders/add' element={<OrderForm /> } /> 
        <Route path='/orders/:orderId' element={<OrderDetails />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}


export default App
