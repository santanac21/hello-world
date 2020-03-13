import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'

class NavComponent extends Component {


    render() {
        return (
        <React.Fragment>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="#home">Fortune Cookie Project</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Link href="#1">Home</Nav.Link>
                                <Nav.Link href="#2">About</Nav.Link>
                                <Nav.Link href="#3">Videos</Nav.Link>
                                <Nav.Link href="#4">Photos</Nav.Link>
                                <Nav.Link href="#5">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
        </React.Fragment>
        )
    }
}

export default NavComponent
