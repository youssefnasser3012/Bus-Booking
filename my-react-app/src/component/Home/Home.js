import React from 'react';
import { Carousel,Card ,Table,Form ,Button} from 'react-bootstrap';
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
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";
import { FcCopyright } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FaRoute } from "react-icons/fa";
import  {jwtDecode } from 'jwt-decode';
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Home = () => {
    const navigate = useNavigate();
    const [destinations, setDestinations] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const UserRole = localStorage.getItem('token');
    const decodedToken = UserRole ? jwtDecode(UserRole) : null;
    const role = decodedToken ? decodedToken.role : 'User';

    useEffect(() => {
        if (!UserRole) {
            navigate('/signin');
        } else {
           
            
            const fetchAppointment = async () => {
                try {
                    const response = await axios.get('http://localhost:5270/api/Appointment');
                    setAppointments(response.data);
                } catch (error) {
                    console.error('Error fetching appointments:', error);
                }
            };

            fetchAppointment();

            const fetchDestination = async () => {
                try {
                    const response = await axios.get('http://localhost:5270/api/Destination/GetAll');
                    setDestinations(response.data);
                } catch (error) {
                    console.error('Error fetching destinations:', error);
                }
            };

            fetchDestination();
        }
    }, [UserRole, navigate]);

    

   
   

return (
<>

<NavigationBar/>



{role==="User"?<Carousel style={{marginTop:'20px', marginBottom:'100px'}} responsive className=' w-50 container '>
{CarouselData.map((item)=>(


    <Carousel.Item>
    <img className="d-block w-100 active"src={item.image} alt="First slide"/>
    <Carousel.Caption><h3>{item.caption}</h3>
    
    </Carousel.Caption>
    </Carousel.Item>
))}

</Carousel> :

<div className='row pb-5 mb-5'>
<div  className='col-6' style={{ maxHeight: '400px', overflowY: 'scroll' ,marginTop:"50px"}}>
      <ul>
      {appointments.map(appointment => (
      <div style={{ display: "flex", justifyContent: "center" }}>
      
            <Table striped bordered hover size="sm" responsive="md">
                <thead>
                    <tr>
                        <th><FcManager size="1.4rem" />Appointment ID</th>
                        <th><FcConferenceCall size="1.5rem" />Max travelers</th>
                        <th><FcAlarmClock size="1.5rem" />Time</th>
                        <th><FcCopyright size="1.5rem" />Class</th>
                        <th><FcMoneyTransfer size="1.5rem" />Price</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr key={appointment.appointmentId}>
                            <td>{appointment.appointmentId}</td>
                            <td>{appointment.maxTravelers}</td>
                            <td>{appointment.departureTime}</td> 
                            <td>{appointment.classe}</td> 
                            <td>{appointment.price}</td>
                            <td>
                                <div className='row'>
                                <Link to="/updatetickets">    <button className='btn btn-sm btn-warning mx-auto row m-2 '> Update </button> </Link> {' '}
                                </div>
                            </td>
                        </tr>
                  
                </tbody>
          
            </Table>
      
        </div>
    ))};
  
                </ul>
                </div>
 {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
     
   
<div  className='col-6' style={{ maxHeight: '400px', overflowY: 'scroll' ,marginTop:"50px",width:"40%"}}>

      <ul>
      {destinations.map(destinations => (
      <div style={{display:"flex",justifyContent:"center"}}>
     
      <Table striped bordered hover size="sm" responsive="md">
            <thead>
                <tr>
                    <th><FaRoute size="1rem" />{' '}Appointment ID</th>
                    <th><FaRoute size="1rem" />{' '}From</th>
                    <th><FaRoute size="1rem" />{' '}To</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
              
                    <tr key={destinations.appointmentId}>
                        <td>{destinations.appointmentId}</td>
                        <td>{destinations.from}</td>
                        <td>{destinations.to}</td>
                        <td>
                            <div className='row'>
                           <Link to="/updateroutes">    <button className='btn btn-sm btn-warning mx-auto row m-2 '> Update </button> </Link> {' '}
                                
                            </div>
                        </td>
                    </tr>
              
            </tbody>
      
        </Table>
  
                </div>
            ))}
          
                </ul>
                </div>
</div>
}

{/* ######################################################################################## */}
<p className='row justify-content-center' style={{fontSize:'2.6rem'}}>Bus Routes </p>
<div className='row text-center justify-content-center' >

{destinations.map(destinations => (

    <Card style={{ width: '18rem', marginLeft:'5px',marginBottom:'40px' }}>
    <Card.Body>
    <Card.Title>{   `${destinations.from}-${destinations.to}`}</Card.Title>


    </Card.Body>
   
    </Card>
   
   

    
))}
{ role!=="Admin"? null :<Card style={{ width: '18rem', marginLeft:'5px',marginBottom:'40px' }}>
<Card.Body>

<Link to="/updateroutes" style={{color:"black"}} ><IoMdAddCircle size="3rem" className="Add_Routes" /></Link>
</Card.Body>

</Card> } 


</div>
<div className='row mb-5'>
 <h3 className='text-center mb-2 pb-3'>Our Classes</h3>
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

{UserRole!=="Admin"?<Card className='mb-3' style={{backgroundColor:"#f9f9f9"}}>
<Card.Body>
                          <div  style={{marginLeft:"190px"}}>
                         
                        
                          <Link to="/requestappointments" style={{textDecoration:'none'}}><Button className="m-4 p-3" variant="success" href="/requestappointments">Request Appointments</Button></Link> {' '}
                           
                            <Link to="/tickets" style={{textDecoration:'none'}}><Button className="m-5 p-3" variant="success" href="/tickets">Book Tickets</Button></Link>{' '}
                           
                            
                            </div>
                            </Card.Body>
                            </Card>: null  } ;          

    </>
)}; 

export default Home;
