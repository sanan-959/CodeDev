import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'

const CustomNavbar = ()=>{
    return(
        <Navbar expand='lg' className="bg-dark">
            <Container>
                <Navbar.Brand href="#home" className="text-white">Code Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white"/>
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#about" className="text-white">About</Nav.Link>
                            <NavDropdown title='Subject' id="basic-nav-dropdown" className="custom-dropdown">
                                <NavDropdown.Item href="#">C++</NavDropdown.Item>
                                <NavDropdown.Item href="#">JavaScript</NavDropdown.Item>
                                <NavDropdown.Item href="#">Java</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#project" className="text-white">Project</Nav.Link>
                        </Nav>
                      </Navbar.Collapse>
                
            </Container>
        </Navbar>
    )
}

export default CustomNavbar;