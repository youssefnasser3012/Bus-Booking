import React from 'react';
import {Table,Card} from 'react-bootstrap';
import { useState } from 'react';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FcClock } from "react-icons/fc";
import { PiMapPinLineDuotone } from "react-icons/pi";

const ApprovedRequest=()=>{
    return(
        <>

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
                <th><PiUsersThreeDuotone size="1.5rem" /> class</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

             
              <td><div className='mt-4' style={{fontWeight:"bold"}}>cairo</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>alexandria</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>10:10</div></td>
              
              <td><div className='mt-4' style={{fontWeight:"bold"}}>5</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>second class</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                <div style={{color:"green",fontWeight:"bold"}}>Approved</div>
                    
                    </div>
                </td>
            </tr>
        </tbody>
    
    </Table>
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
               
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> class</th>
                
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

             
              <td><div className='mt-4' style={{fontWeight:"bold"}}>alexandria</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>giza</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>10:10</div></td>
              
              <td><div className='mt-4' style={{fontWeight:"bold"}}>5</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>first class</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                <div style={{color:"green",fontWeight:"bold"}}>Approved</div>
                    
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
    export default ApprovedRequest;




























