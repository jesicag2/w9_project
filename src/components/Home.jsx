import React from 'react';
import { Container, Row } from 'react-bootstrap';
import NavBar from './NavBar';
import '../App.css';

function Home() {
  return (

    <Container fluid fill>
        <NavBar />
        <Row className='home-page'>
          <div>
            <h2>Hello!</h2>
            <h3>Welcome to E-Commerce Interface!</h3>
          </div>
        </Row>
    </Container>

  )
}

export default Home