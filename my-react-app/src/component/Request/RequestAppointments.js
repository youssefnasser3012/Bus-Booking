import React, { useState } from 'react';
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcClock } from "react-icons/fc";
import {Table } from 'react-bootstrap';
import NavigationBar from '../navbar/NAvigationBar';
import { PiUsersThreeDuotone } from "react-icons/pi";
import './RA.css'



const  RequestAppointments=()=>{
    

    return(
    <>
<NavigationBar/> 


<div className="ubdate-routes p-5 ">
<h3 className='text-center m-3 pb-5'> Request Appointments</h3>
<div className="row justify-content-center pb-5">
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
               
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

             
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold" }}><select id="number"  className="select-number" >
       
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        {/* Add more options as needed */}
      </select></div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <button className='btn btn-sm btn-success mx-auto row m-2'>Book Ticket</button>{' '}
                    
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
    export default RequestAppointments;