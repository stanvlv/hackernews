import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Top() {
  return (
     <Navbar bg="primary" variant="dark">
     <Container>
       <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
       <Nav className="me-auto" >
         <Nav.Link href="#home" className="ps-0">new | </Nav.Link>
         <Nav.Link href="#features" className="ps-0">past | </Nav.Link>
         <Nav.Link href="#pricing" className="ps-0">comments | </Nav.Link>
         <Nav.Link href="#pricing" className="ps-0">ask | </Nav.Link>
         <Nav.Link href="#pricing" className="ps-0">show | </Nav.Link>
         <Nav.Link href="#pricing" className="ps-0">jobs | </Nav.Link>
         <Nav.Link href="#pricing" className="ps-0">submit | </Nav.Link>
       </Nav>
     </Container>
   </Navbar>
   
  )
}




