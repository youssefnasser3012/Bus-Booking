import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import { Card ,Table} from 'react-bootstrap';
import { FcAdvance } from "react-icons/fc";
import { GiBus } from "react-icons/gi";
import { CiRoute } from "react-icons/ci";
import { GiTicket } from "react-icons/gi";
import { useState } from 'react';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FcClock } from "react-icons/fc";
import { PiMapPinLineDuotone } from "react-icons/pi";
import { PiUserSquareDuotone } from "react-icons/pi";
const HistorySideBar=()=>{
    //const routesData=JSON.parse(localStorage.getItem('routesdata'));
    const  TicketsData= JSON.parse(localStorage.getItem('ticketsdata'));
    const[book,setbook]=useState(false)
    const daydate =localStorage.getItem("selectedDate")
    const handelBook=()=>{

        setbook(true);
    }
    
    const handelremove=()=>{

        setbook(false);
    }


    

    return(
        <>
    

    <Tabs  defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 bg-dark">
      <Tab  eventKey="home  " title="Pending Requests" >
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
             
            
               
            </tr>
        </tbody>
    
    </Table>
</div>
</div>
      

     
      
      </Tab>
      <Tab eventKey="profile" title="Approved Requests">
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
             
            
              
            </tr>
        </tbody>
    
    </Table>
</div>
</div>

      </Tab>
    
    </Tabs>

   
   



</>

)};
    export default HistorySideBar;