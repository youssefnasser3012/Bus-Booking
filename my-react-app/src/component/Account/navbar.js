/* eslint-disable jsx-a11y/anchor-is-valid */
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
import { FaBusAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

function navbar() {
return (

  <Navbar collapseOnSelect expand="lg" className=" bg-dark">
  <Container>
    <Navbar.Brand href="#home"><FaBusAlt size="3rem" color="white"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse  className="collapse_color" id="responsive-navbar-nav">
      
      <Nav className="nav_links ms-auto pl-3">
      <Link to="/" style={{textDecoration:'none'}}> <Nav.Item href="/home">Home</Nav.Item></Link>
      <Link to="/tickets"  style={{textDecoration:'none'}}><Nav.Item href="/tickets">Tickets</Nav.Item></Link>
      <Link to="/traveldistination" style={{textDecoration:'none'}}><Nav.Item href="/traveldistination">Travel Distination</Nav.Item></Link>
      <Link to="/history" style={{textDecoration:'none'}}><Nav.Item href="/history">History</Nav.Item></Link>
      <Link to="/busstation" style={{textDecoration:'none'}}><Nav.Item href="/busstation">Bus Station</Nav.Item></Link>
      <Link to="/ourclasses" style={{textDecoration:'none'}}><Nav.Item href="/ourclasses">Our Classes</Nav.Item></Link>
      
      </Nav>
    
    
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default navbar;