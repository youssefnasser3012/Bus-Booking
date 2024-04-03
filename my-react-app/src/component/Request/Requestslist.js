import React, { useState } from 'react';
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { Form,Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import NavigationBar from '../navbar/NAvigationBar';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiUserSquareDuotone } from "react-icons/pi";
const Request=()=>{
    const [UpdatedDate, setUpdtatededDate] = useState('');
  const [UpdatedTime, setUpdtatededTime] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
   const [classes ,setClasses]=useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [numoftravelers, setnumoftravelers] = useState('');
    const [image, setImage] = useState('');

    const handelClassChange =(e)=>{
        setClasses(e.target.value)

    }
    const handleFromChange = (e) => {
        setFrom(e.target.value);
    };

    const handleToChange = (e) => {
        setTo(e.target.value);
    };

    const handleTicketPriceChange = (e) => {
        setTicketPrice(e.target.value);
    };

    const handlenumberoftravelrs = (e) => {
        setnumoftravelers(e.target.value);
    };
    const handleDateChange = (event) => {
    setUpdtatededDate(event.target.value);
    
    };
    
    const handleTimeChange = (event) => {
        setUpdtatededTime(event.target.value);
        
    };
    const handleAdd = () => {
        // Construct the object with the form data
        const TicketsData = {
        
            'updated-tickets-from': from,
            'updated-tickets-to': to,
            'updated-ticketPrice': ticketPrice,
            'updated-tickets-image': image,
            'updated-tickets-date':UpdatedDate,
            'updated-tickets-time':UpdatedTime,
            'updated-tickets-classes':classes,
        };
        // Store the form data in local storage
        localStorage.setItem('ticketsdata', JSON.stringify(TicketsData));

        // Clear the form fields after saving
        clearForm();
    };

    const handleDelete = () => {
        // Clear the form data from local storage
        localStorage.removeItem('ticketsdata');
        // Clear the form fields after deletion
        clearForm();
    };

    const clearForm = () => {
    
        setFrom('');
        setTo('');
        setImage('')
        setUpdtatededTime('')
        setUpdtatededDate('')
        setTicketPrice('');
        setImage('');
        setClasses('')
    };

    return(
    <>
<NavigationBar/> 
<div className="ubdate-routes p-5 ">
<h3 className='text-center m-3 pb-5'>Requests</h3>
<div className="row justify-content-center pb-5">
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
                <th><PiUserSquareDuotone size="1.6rem" /> User</th>
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2' onClick={handleAdd}> Accept </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' onClick={handleDelete}>Decline</button>{'  '}
                    </div>
                </td>
            </tr>
        </tbody>
    </Table>
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
                <th><PiUserSquareDuotone size="1.6rem" /> User</th>
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2' onClick={handleAdd}> Accept </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' onClick={handleDelete}>Decline</button>{'  '}
                    </div>
                </td>
            </tr>
        </tbody>
    </Table>
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
                <th><PiUserSquareDuotone size="1.6rem" /> User</th>
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2' onClick={handleAdd}> Accept </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' onClick={handleDelete}>Decline</button>{'  '}
                    </div>
                </td>
            </tr>
        </tbody>
    </Table>
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
                <th><PiUserSquareDuotone size="1.6rem" /> User</th>
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2' onClick={handleAdd}> Accept </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' onClick={handleDelete}>Decline</button>{'  '}
                    </div>
                </td>
            </tr>
        </tbody>
    </Table>
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
                <th><PiUserSquareDuotone size="1.6rem" /> User</th>
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2' onClick={handleAdd}> Accept </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' onClick={handleDelete}>Decline</button>{'  '}
                    </div>
                </td>
            </tr>
        </tbody>
    </Table>
</div>
</div>

</>

)

    
    
    
    
    };
    export default Request;