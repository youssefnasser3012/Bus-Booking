import React, { useState } from 'react';
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { Form,Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import NavigationBar from '../navbar/NAvigationBar';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FcCalendar } from "react-icons/fc";
const UpdateTickets=()=>{
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
<h3 className='text-center m-3 pb-5'>Update Tickets</h3>
<div className="row justify-content-center pb-5">
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                <th><FaRoute size="1.4rem" /></th>
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcCalendar size="1.6rem" /> Date and Time</th>
                <th><FcMoneyTransfer size="1.6rem" /> Ticket Price</th>
                <th>Class</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Travelers</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><div className=' mt-5'>1</div></td>
                <td><input type="text" value={from} onChange={handleFromChange} placeholder="Enter City" className="form-control form-control-sm no-margin  mt-5" /></td>
                <td><input type="text" value={to} onChange={handleToChange} placeholder="Enter City" className="form-control form-control-sm no-padding no-margin  mt-5" /></td>
                <td>   
                <div>

                <label>Date:</label>{' '}
               <div className='row'> <input className='p-1 m-1' style={{borderRadius:"8px"}}type="date" value={UpdatedDate} onChange={handleDateChange}/> </div>
              <label>Time:</label>
               <div className='row'> <input className='p-1 m-1' style={{borderRadius:"8px"}} type="time" value={UpdatedTime} onChange={handleTimeChange}/></div>
              </div>
              </td>
                <td><input  type="number" value={ticketPrice} onChange={handleTicketPriceChange} className="no-arrows form-control-sm no-padding no-margin mt-5" /></td>
                <td> <div>
                
                <Form.Select className=' mt-5' style={{  borderRadius: "20px" }} value={classes} onChange={handelClassChange}>
                    <option>Select City</option>
                    <option value="First Class">First Class</option>
                    <option value="Business Class">Business Class</option>
                    <option value="primary class">Primary Class</option>
                    <option value="Comfort class">Comfort Class</option>
                </Form.Select>
            </div></td>
            <td><input type="number" value={numoftravelers} placeholder='Enter Num Of Travelers' onChange={handlenumberoftravelrs} className="no-arrows form-control-sm no-padding no-margin  mt-5" /></td>
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2' onClick={handleAdd}> Add </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' onClick={handleDelete}>Delete</button>{'  '}
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
    export default UpdateTickets;