import React from 'react';
import { Carousel,Card } from 'react-bootstrap';
import './Home.css'
import { Link } from 'react-router-dom';
import NavigationBar from '../navbar/NAvigationBar';
import { CarouselData } from './CarouselData';
import { RoutesData } from './RoutesData';
import { IoMdAddCircle } from "react-icons/io";
import first from './photos/firstPrime-1.89bafabf.jpg'
import business from './photos/bp.jpg'
import comfort from './photos/business-1.542db289.jpeg'
import economy  from './photos/first-3.491a648e.jpeg'


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


    </Card.Body>
   
    </Card>
   
   

    
))}
{ ( (Admin) && (UserRole )&&( UserRole.role === "Admin") )?  <Card style={{ width: '18rem', marginLeft:'5px',marginBottom:'40px' }}>
<Card.Body>

<Link to="/addroutes" style={{color:"black"}} ><IoMdAddCircle size="3rem" className="Add_Routes" /></Link>
</Card.Body>

</Card>: null } 


</div>
<div className='row mb-5'>
 <h3 className='text-center mb-4 pb-3'>Our Classes</h3>
 <div class='row text-center justify-content-center row'>
        
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={first} />
    <Card.Body>
    <Card.Title>First Class</Card.Title>
    <Card.Text>
    <div >
        <li>Single Seat</li>
        <li>Individual Seat Screen</li>
        <li>Air Conditioner</li>
        <li>DvD</li>
        <li>WC</li>
        <li>USB charging</li>
        <li>Wi Fi</li>
        </div>
    </Card.Text>
    </Card.Body>
</Card>
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={business} />
    <Card.Body>
    <Card.Title>Business</Card.Title>
    <Card.Text>
    <div className='m-4'>
        <li>Comfy wide Leather Seats</li>
        <li>Individual Seat Screen</li>
        <li>Air Conditioner</li>
        <li>Snaks and Drinks</li>
        <li>Direct Trips</li>
        <li>WC</li>
        <li>Wi Fi</li>
        </div>
    </Card.Text>
    </Card.Body>
</Card>
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={economy} />
    <Card.Body>
    <Card.Title>Economy</Card.Title>
    <Card.Text>
    <div className='m-4'>
        <li>Single Seat</li>
    
        <li>Air Conditioner</li>
        <li>WC</li>
       
        <li>USB charging</li>
        <li>Wi Fi</li>
        </div>
    </Card.Text>
    </Card.Body>
</Card>
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={comfort} />
    <Card.Body>
    <Card.Title>Comfort</Card.Title>
    <Card.Text>
       <div className='m-4'>
        <li>Air Conditioner</li>
       
        <li>USB charging</li>
        <li>WC</li>
        </div>
    </Card.Text>
    </Card.Body>
</Card>
</div>
</div>

    </>
)};

export default Home;
