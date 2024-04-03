
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
      <Link to="/updatetickets"  style={{textDecoration:'none'}}><Nav.Item href="/updatetickets">Update Tickets</Nav.Item></Link> 
    
       <Link to="/request" style={{textDecoration:'none'}}><Nav.Item href="/request">Requests</Nav.Item></Link>
  
   <Link to="/manageusers" style={{textDecoration:'none'}}><Nav.Item href="/manageusers"> Manage Users</Nav.Item></Link>
      </Nav>
    
    
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default navbar;