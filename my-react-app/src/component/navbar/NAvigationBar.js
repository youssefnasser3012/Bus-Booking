/* eslint-disable jsx-a11y/anchor-is-valid */
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {Navbar,Nav,Container,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'
import { FaBusAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function NavigationBar() { 
    
    const UserRole = JSON.parse(localStorage.getItem('UserRole'));
  
  
    const signin = JSON.parse(localStorage.getItem('signin'));
  
    const issignIn  = signin !== null;

    const signup = JSON.parse(localStorage.getItem('signup'));
  
    const issignup = signup !== null;

  const[islogedIn ,setislogedIn ]=useState(issignIn || issignup)
  const Admin =   (issignIn)  && (signin.email ===UserRole.email ) && (signin.password ===UserRole.password)  ? true:false;
    
    const handelLogOut = () => {
        // Clear the form data from local storage
        if(signin){localStorage.removeItem('signin');}
        if(signup){localStorage.removeItem('signup');}
        setislogedIn(false)
        
        // Clear the form fields after deletion
        window.location.reload();
    };
    
return (

  <Navbar collapseOnSelect expand="lg" className=" bg-dark">
  <Container>
    <Navbar.Brand href="#home"><FaBusAlt size="3rem" color="white"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse  className="collapse_color" id="responsive-navbar-nav">
      
      <Nav className="nav_links ms-auto pl-3">
      
      <Link to="/" style={{textDecoration:'none'}}> <Nav.Item href="/home">Home</Nav.Item></Link>
      {((Admin )&& (UserRole) &&( UserRole.role === "Admin") )?<Link to="/updatetickets"  style={{textDecoration:'none'}}><Nav.Item href="/updatetickets">Update Tickets</Nav.Item></Link> :<Link to="/tickets"  style={{textDecoration:'none'}}><Nav.Item href="/tickets">Tickets</Nav.Item></Link>}
     { ((Admin )&& (UserRole) &&( UserRole.role === "Admin") )? null:<Link to="/traveldistination" style={{textDecoration:'none'}}><Nav.Item href="/traveldistination">Travel Distination</Nav.Item></Link>}
      {((Admin )&& (UserRole) &&( UserRole.role === "Admin") )? <Link to="/request" style={{textDecoration:'none'}}><Nav.Item href="/request">Requests</Nav.Item></Link>: <Link to="/history" style={{textDecoration:'none'}}><Nav.Item href="/history">History</Nav.Item></Link>}
     { ((Admin )&& (UserRole) &&( UserRole.role === "Admin") )? null:<Link to="/busstation" style={{textDecoration:'none'}}><Nav.Item href="/busstation">Bus Station</Nav.Item></Link>}
     { ((Admin )&& (UserRole) &&( UserRole.role === "Admin") )? null :  <Link to="/ourclasses" style={{textDecoration:'none'}}><Nav.Item href="/ourclasses">Our Classes</Nav.Item></Link>}
  {((Admin )&& (UserRole) &&( UserRole.role === "Admin") )? <Link to="/manageusers" style={{textDecoration:'none'}}><Nav.Item href="/manageusers"> Manage Users</Nav.Item></Link>: null}
      </Nav>
   
      <div>
      {islogedIn  ? (<Link to="/#" style={{textDecoration:'none'}}><Button onClick={handelLogOut} variant="outline-danger" href="/logout">Logout</Button></Link>) : 
      (
        <div>
            <Link to="/signin" style={{textDecoration:'none'}}><Button className="m-2" variant="outline-success" href="/signin">Sign In</Button></Link>
            {'   '}
            <Link to="/signup" style={{textDecoration:'none'}}><Button variant="outline-danger" href="/signup">Sign Up</Button></Link>
        </div>
      )}
  </div>
      
    
    
    
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}

export default NavigationBar;