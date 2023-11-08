import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container,Navbar,NavDropdown,Nav,Form,Button,Offcanvas} from 'react-bootstrap';
import { faGear, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Navbarmain() {
  return (
    <>
    <Container>
    <Navbar collapseOnSelect expand="lg" className="bg-transparent fixed-top"  style={{
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }}>
      <Container>
        <Navbar.Brand href="#home"  className='navlinks' >Zonel<span>.</span><sup>v2.0</sup></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="justify-content-center flex-grow-1 pe-3  navlinks">
            <Nav.Link as={Link} to = "/"  className='navlinks'>Home</Nav.Link>
            <Nav.Link as={Link} to = "/About"  className='navlinks'>About</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown"  className='navlinks'>
              <NavDropdown.Item href="#action/3.1"  className='navlinks'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link as={Link} to = "/Contact" className='navlinks'>Contact</Nav.Link>
          </Nav>
    
          <Nav>
          <FontAwesomeIcon icon={faMagnifyingGlass}  className='fonticonsnav'/>
          <FontAwesomeIcon icon={faGear}  className='fonticonsnav'/>
            <Button className='buttonmain bg-black border-black'>Buy Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </Container>
    </>
  )
}

export default Navbarmain;