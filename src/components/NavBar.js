import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

class NavBar extends Component {

    render() {

        const loginButton = this.props.isloggedin ? <Navbar.Brand className="navbar-brand">{this.props.username}</Navbar.Brand>
            : <NavLink to="/login"><Button variant="primary">Login</Button></NavLink>
        return (
            <div>
                <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbarColor02" expand="lg">
                    <Navbar.Brand className="navbar-brand">Itemize</Navbar.Brand>
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
                            {loginButton}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavBar