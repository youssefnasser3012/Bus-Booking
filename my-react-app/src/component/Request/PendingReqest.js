import React from 'react';
import {Table,Card} from 'react-bootstrap';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FcClock } from "react-icons/fc";
import { PiMapPinLineDuotone } from "react-icons/pi";





const PendingReqest=()=>{

    
   

  

    return(
        <>
<div className="ubdate-routes p-5 ">
<h3 className='text-center m-3 pb-5'> Pending Appointments</h3>
<div className="row justify-content-center pb-5">
    <Table striped bordered hover size="sm" responsive="md">
        <thead>
            <tr>
                
               
                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                <th><FcClock size="1.6rem" /> Date and Time</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th><PiUsersThreeDuotone size="1.5rem" /> Number Of Tickets</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               

             
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>5</div></td>
              <td><div className='mt-4' style={{fontWeight:"bold"}}>ahmed20240</div></td>
             
            
                <td>
                <div className='row  mt-3'>
                    <div style={{color:"red",fontWeight:"bold"}}>Pending</div>
                    
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
    export default PendingReqest;