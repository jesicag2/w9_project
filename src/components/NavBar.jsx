import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../App.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Jess E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Customers" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/customers">Add Customer</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="//customers/:customerId">View Customer</NavDropdown.Item> */}
              {/* <NavDropdown.Item as={Link} to="/update-customer">Update Customer</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products">Products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/add">Add Product</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/products/:productId">View Product</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/update/:productId">Update Product</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Orders" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/orders/add">Add Order</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/orders/:orderId">View Order</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;