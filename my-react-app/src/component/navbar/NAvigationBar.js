import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
import { FaBusAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const navigate = useNavigate();
    const UserRole = localStorage.getItem('token');
    console.log("UserRole:", UserRole); // Log the UserRole to check its value
    
    const decodedToken = UserRole ? jwtDecode(UserRole) : null;
    const role = decodedToken ? decodedToken.role : 'User';
  
    const handelLogOut = () => {
        if (UserRole) {
            localStorage.removeItem('token');
         
            window.location.reload(); 
            navigate('/signin')
        }
    };
    
    return (
        <Navbar collapseOnSelect expand="lg" className=" bg-dark">
            <Container>
                <Navbar.Brand href="#home"><FaBusAlt size="3rem" color="white"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  className="collapse_color" id="responsive-navbar-nav">
                    <Nav className="nav_links ms-auto pl-3">
                        <Link to="/home" style={{textDecoration:'none'}}> <Nav.Item href="/home">Home</Nav.Item></Link>
                        {role !== "User" ? <Link to="/updatetickets"  style={{textDecoration:'none'}}><Nav.Item href="/updatetickets">Update Tickets</Nav.Item></Link> : <Link to="/tickets"  style={{textDecoration:'none'}}><Nav.Item href="/tickets">Tickets</Nav.Item></Link>}
                        {role !== "User" ? null : <Link to="/requestappointments" style={{textDecoration:'none'}}><Nav.Item href="/requestappointments">Request Tickets</Nav.Item></Link>}
                        {role !== "User" ? <Link to="/request" style={{textDecoration:'none'}}><Nav.Item href="/request">Requests</Nav.Item></Link> : <Link to="/history" style={{textDecoration:'none'}}><Nav.Item href="/history">History</Nav.Item></Link>}
                        {role !== "User" ? null : <Link to="/busstation" style={{textDecoration:'none'}}><Nav.Item href="/busstation">Bus Station</Nav.Item></Link>}
                        {role !== "User" ? <Link to="/showusers" style={{textDecoration:'none'}}><Nav.Item href="/showusers"> Traveleres</Nav.Item></Link> : null}
                    </Nav>
                    <div>
                        {UserRole ? (
                            <Link to="/#" style={{textDecoration:'none'}}><Button onClick={handelLogOut} variant="outline-danger" href="/logout">Logout</Button></Link>
                        ) : (
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
