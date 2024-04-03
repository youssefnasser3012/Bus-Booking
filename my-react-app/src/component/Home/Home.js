import React from 'react';
import { Carousel,Card } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';
import NavigationBar from '../navbar/NAvigationBar';
import { CarouselData } from './CarouselData';
import { RoutesData } from './RoutesData';
import { IoMdAddCircle } from "react-icons/io";

const Home = () => {
    
    const  UserRole= JSON.parse(localStorage.getItem('UserRole'));
  
    const signin = JSON.parse(localStorage.getItem('signin'));
  
    const issignIn  = signin !== null;

    // const signup = JSON.parse(localStorage.getItem('signup'));
  
    // const issignup = signup !== null;

    const Admin = (issignIn)  && (signin.email ===UserRole.email ) && (signin.password ===UserRole.password)  ? true:false;
   


    // Clear the form fields after deletion
   

return (
<>
{/* <div className='bg-dark'> */}
<NavigationBar/>
<Carousel style={{marginTop:'20px', marginBottom:'100px'}} responsive className=' w-50 container '>
{CarouselData.map((item)=>(


    <Carousel.Item>
    <img className="d-block w-100 active"src={item.image} alt="First slide"/>
    <Carousel.Caption><h3>{item.caption}</h3>
    
    </Carousel.Caption>
    </Carousel.Item>
))}

</Carousel>
<p className='row justify-content-center' style={{fontSize:'2.6rem'}}>Bus Routes </p>
<div className='row text-center justify-content-center' >

{RoutesData.map((Routes)=>(

    <Card style={{ width: '18rem', marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Body>
    <Card.Title>{Routes.Route}</Card.Title>
<Link to="/tickets" style={{textDecoration:"none"}}><Card.Link  style={{color:'green',fontWeight:"bold"}} href="#">Book Ticket</Card.Link></Link>

    </Card.Body>
   
    </Card>
   
   

    
))}
{ ( (Admin) && (UserRole )&&( UserRole.role === "Admin") )?  <Card style={{ width: '18rem', marginLeft:'5px',marginBottom:'40px' }}>
<Card.Body>

<Link to="/addroutes" style={{color:"black"}} ><IoMdAddCircle size="3rem" className="Add_Routes" /></Link>
</Card.Body>

</Card>: null } 


</div>

    </>
)};

export default Home;
