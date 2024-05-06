import React, { useEffect, useRef, useState} from 'react';
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { Form,Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import NavigationBar from '../navbar/NAvigationBar';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FcCalendar } from "react-icons/fc";
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateTickets=()=>{
   
 const toRef =useRef('');
const fromRef=useRef('');
   const UpdatedDateRef =useRef(''); 
   const AppointmentIdRef =useRef(''); 
   const UpdatedTimeRef=useRef('');
   const TicketsPriceRef=useRef('');
   const NumoftravelersRef=useRef('');
   const Numoftickets=useRef('');
   const classesRef =useRef('');
 useEffect(()=>{

 console.log("render");

 },fromRef)

   
    const handleadd = async(e) => {
        e.preventDefault();
        const TicketsData = {
        
            //    'updated-tickets-from':fromRef.current.value,
            //     'updated-tickets-to': toRef.current.value,
            // "appointmentId": 0,
            "departureTime": UpdatedDateRef.current.value,
            "maxTravelers": Numoftickets.current.value,
            "classe": classesRef.current.value,
            "price": TicketsPriceRef.current.value,
            "appointmentId":AppointmentIdRef.current.value


            };



            try {
                
                const response = await axios.post('http://localhost:5270/api/Appointment/Create',TicketsData );
                console.log('Added successfully:', response.data);
                clearForm();
               
            } catch (err) {
                //  console.error(err.response.data);
                
    
            }


        // Construct the object with the form data
        // const TicketsData = {
        
        // //    'updated-tickets-from':fromRef.current.value,
        // //     'updated-tickets-to': toRef.current.value,
        //     'updated-ticketPrice': TicketsPriceRef.current.value,

        //     'updated-numoftickets':Numoftickets.current.value,
        //     'updated-tickets-date':UpdatedDateRef.current.value,
        //     'updated-tickets-time':UpdatedTimeRef.current.value,
        //     'updated-tickets-classes':classesRef.current.value,
        // };
        // // Store the form data in local storage
        // localStorage.setItem('ticketsdata', JSON.stringify(TicketsData));

        // Clear the form fields after saving
        clearForm();
    };

    const handleDelete = () => {
        // Clear the form data from local storage
        // localStorage.removeItem('ticketsdata');
        // Clear the form fields after deletion
        clearForm();
    };

    const clearForm = () => {
    // fromRef.current.value='';
    // toRef.current.value='';
    TicketsPriceRef.current.value='';
   
    UpdatedDateRef.current.value='';
    // UpdatedTimeRef.current.value='';
    classesRef.current.value='';
    Numoftickets.current.value='';
    AppointmentIdRef.current.value='';
       
        
    };

    return(
    <>
<NavigationBar/> 
<div className="ubdate-routes p-5 ">
<h3 className='text-center m-3 pb-5'>Add Tickets</h3>
<div className="row justify-content-center pb-5">
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                <th><FaRoute size="1.4rem" /></th>
                {/* <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th> */}
                <th><FcCalendar size="1.6rem" /> Appointment ID</th>
                <th><FcCalendar size="1.6rem" /> Date and Time</th>
                <th><FcMoneyTransfer size="1.6rem" /> Ticket Price</th>
                <th>Class</th>
               
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>

                <td><div className=' mt-5'>1</div></td>
                
                <td> <td><input  type="number" ref={(ref)=>AppointmentIdRef.current=ref} className="no-arrows form-control-sm no-padding no-margin mt-4" /></td></td>
                
                
                {/* <td><input type="text" ref={(ref)=>fromRef.current=ref}  placeholder="Enter City" className="form-control form-control-sm no-margin  mt-5" /></td>
                <td><input type="text" ref={(ref)=>toRef.current=ref} placeholder="Enter City" className="form-control form-control-sm no-padding no-margin  mt-5" /></td> */}
                <td>   
                <div>
                
                <label>Date:</label>{' '}
                <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{width:"70%"}}>
               <div className='row'> <input className='p-1 m-1' style={{borderRadius:"8px"}} type="date" ref={(ref)=>UpdatedDateRef.current=ref}/> </div>
              {/* <label>Time:</label>
               <div className='row'> <input className='p-1 m-1' style={{borderRadius:"8px"}} type="time"  ref={(ref)=>UpdatedTimeRef.current=ref}/></div> */}
              </div>
              </div>
              </div>
              </td>
                <td><input  type="number" ref={(ref)=>TicketsPriceRef.current=ref} className="no-arrows form-control-sm no-padding no-margin mt-4" /></td>
                <td> <div>
                
                <Form.Select className=' mt-4' style={{  borderRadius: "20px" }} ref={(ref)=>classesRef.current=ref}>
                    <option>Select City</option>
                    <option value="First Class">First Class</option>
                    <option value="Business Class">Business Class</option>
                    <option value="primary class">Primary Class</option>
                    <option value="Comfort class">Comfort Class</option>
                </Form.Select>
            </div></td>
           
            <td><input type="number" ref={(ref)=>Numoftickets.current=ref} placeholder='Enter Num Of Tickets' className="no-arrows form-control-sm no-padding no-margin  mt-4" /></td>
                <td>
                <div className='row'>
                <div style={{display:"flex",justifyContent:"center"}}>
               
                
                    <button className='btn btn-l btn-success mx-auto row m-4 pl-2' onClick={handleadd}> Add</button>{' '}
                    
                    </div>
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