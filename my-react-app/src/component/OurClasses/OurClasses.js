import React from 'react';
import NavigationBar from '../navbar/NAvigationBar';
import { Card } from 'react-bootstrap';
import first from './photos/firstPrime-1.89bafabf.jpg'
import business from './photos/bp.jpg'
import comfort from './photos/business-1.542db289.jpeg'
import economy  from './photos/first-3.491a648e.jpeg'
import './OurClasses.css'
const OurClasses=()=>{
    return(
    <>
    <div class='row text-center justify-content-center row'>
        <NavigationBar/> 
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={first} />
    <Card.Body>
    <Card.Title>First Class</Card.Title>
    <Card.Text>
        <li>Single Seat</li>
        <li>Individual Seat Screen</li>
        <li>Air Conditioner</li>
        <li>WC</li>
        <li>USB charging</li>
        <li>Wi Fi</li>
    </Card.Text>
    </Card.Body>
</Card>
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={business} />
    <Card.Body>
    <Card.Title>Business</Card.Title>
    <Card.Text>
        <li>Comfy wide Leather Seats</li>
        <li>Air Conditioner</li>
        <li>Snaks and Drinks</li>
        <li>WC</li>
        <li>Wi Fi</li>
    </Card.Text>
    </Card.Body>
</Card>
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={economy} />
    <Card.Body>
    <Card.Title>Economy</Card.Title>
    <Card.Text>
        <li>Single Seat</li>
        <li>Individual Seat Screen</li>
        <li>Air Conditioner</li>
        <li>WC</li>
        <li>Direct Trips</li>
        <li>USB charging</li>
        <li>Wi Fi</li>
    </Card.Text>
    </Card.Body>
</Card>
        <Card style={{ width: '18rem',marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Img variant="top" src={comfort} />
    <Card.Body>
    <Card.Title>Comfort</Card.Title>
    <Card.Text>
        <li>DVD</li>
        <li>Air Conditioner</li>
        <li>WC</li>
        <li>USB charging</li>
        <li>Wi Fi</li>
    </Card.Text>
    </Card.Body>
</Card>
</div>
</>    
)};
    export default OurClasses;