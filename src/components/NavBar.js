import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarColor02" expand="lg">
                    <Navbar.Brand className="navbar-brand" href="#home">Itemize</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/upload">Upload</NavLink>
                            <NavLink className="nav-link" to="/search">Search</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="justify-content-end">
                                <NavLink to="/"><Button variant="primary">Login</Button></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
                )
            }
        }
        
export default NavBar