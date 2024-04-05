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
                    <button className='btn btn-sm btn-success mx-auto row m-2' > Accept </button>{' '}
                    <button className='btn btn-sm btn-danger mx-auto row' >Decline</button>{'  '}
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