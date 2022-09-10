import React, { Fragment } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

import './navbar.css'
function MyNavbar (){
    
    return(
        <Fragment>
            <Navbar bg="dark"  variant="dark"  expand="lg">
                <Container fluid="sm">
                    <Navbar.Brand href="/">
                    <Image
                        alt=""
                        src="/images/logoK.jpg"
                        width="30"
                        height="25"
                        className="d-inline-block mt-1 align-top"
                        />{' '}
                        Karang Taruna
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                    <Nav className="ms-auto" variant="pills" >
                        <Nav.Link className="nav1" eventKey="1" href="/">Beranda</Nav.Link>
                        <Nav.Link className="nav1" eventKey="2" href="/tentang">Tentang</Nav.Link>
                        <Nav.Link className="nav1" eventKey="3" href="/event">Agenda</Nav.Link>
                        <Nav.Link className="nav1" href="/kontak">Kontak</Nav.Link>
                        <NavDropdown className="nav1" title="Research" id="basic-nav-dropdown">
                            <NavDropdown.Item  href="/login">Login</NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="/register">
                                Register
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>       
        </Fragment>
    )
}
export default MyNavbar;