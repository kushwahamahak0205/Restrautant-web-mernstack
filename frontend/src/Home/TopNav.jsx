


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import { Link } from 'react-router-dom';


const TopNav = () => {

    return ( 
        <>
        {/* <marquee style={{backgroundColor:"black",color:"white"}}>
          get free delivery on your first order
        </marquee> */}
        <div id='topmenu'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src="/src/image/logoo.svg"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link as={Link} to ="/home">HOME</Nav.Link>
            <Nav.Link as={Link} to ="/about">ABOUT</Nav.Link>
            <Nav.Link as={Link} to ="/menu">OUR MENU</Nav.Link>
            <Nav.Link as={Link} to ="/order">ORDER</Nav.Link>
            <Nav.Link as={Link} to ="/blog">BLOG</Nav.Link>
            <Nav.Link as={Link} to ="/customer">Customer Testomonial</Nav.Link>
         

          
          <IoSearch />
            
            <FaShoppingCart />
          
            <FaUser />
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

   
        </>
     );
}
 
export default TopNav;