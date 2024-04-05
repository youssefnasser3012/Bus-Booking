import React from 'react';
import "./SideBar.css"
import { Card} from 'react-bootstrap';
import { FcAdvance } from "react-icons/fc";
import { GiBus } from "react-icons/gi";
import { CiRoute } from "react-icons/ci";
import { GiTicket } from "react-icons/gi";
import { useState } from 'react';

const SideBar=()=>{
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
    

        <div style={{ display: "flex", justifyContent: "center" }}> 
        <div className='col-1'>
        
        
        
        
        
         </div>
<Card  className ="card-style col-11" border='light' style={{ marginTop: "6rem", paddingLeft:"5%",color: "black" , width: "70%",backgroundColor:"#f6f6f9" }}>
{TicketsData ? <div className='row'>
    <Card.Body className='col-3'><p style={{fontWeight:"bold",color:"#1e2320"}}> From </p><p  style={{paddingTop:'5px',color:"#008b02",fontSize:"1.09rem"}}> {localStorage.getItem("fromCity")}</p></Card.Body>
    <Card.Body className='col-3'><p style={{fontWeight:"bold",color:"#1e2320"}}>To </p><p  style={{paddingTop:'5px',color:"#008b02",fontSize:"1.09rem"}}> {localStorage.getItem("toCity")}</p></Card.Body>
    <Card.Body className='col-3'><p  style={{fontWeight:"bold",color:"#1e2320"}}>Date </p><p  style={{paddingTop:'5px',color:"#008b02",fontSize:"1.09rem"}}> {localStorage.getItem("selectedDate")}</p></Card.Body>
    <Card.Body className='col-3'><p style={{fontWeight:"bold",color:"#1e2320"}}>Numbers Of Tickets </p><p style={{paddingTop:'5px',paddingLeft:'4rem',color:"#008b02",fontSize:"1.09rem"}}> {localStorage.getItem("numoftickets")}</p></Card.Body>
    </div>:<Card className ="card-style col-11" border='light' style={{  padding:"5%",color: "black" , width: "70%",backgroundColor:"#f6f6f9" }}><Card.Title > Please complete your Data </Card.Title></Card> }
    

</Card>
</div>



<div className='row'>
<div className='side-bar col-3 ' bg='light' style={{ height:"50rem", width:"16%",boxShadow:"0px 0px 1px 0px #9d9f9e"}}>
<div  style={{padding:"10px",marginTop:"2.4rem",paddingTop:"10rem",paddingLeft:"4rem"}}>
<div><p style={{margin:"2px",fontWeight:"bold"}}>Time</p>
</div>
<div style={{paddingLeft:"1rem"}}>
<div>
<input type='checkbox' /> PM
</div>
<div>
<input type='checkbox' /> AM
</div>
</div>

<div><p style={{margin:"2px",fontWeight:"bold"}}>Classes</p></div>

<div style={{paddingLeft:'1rem'}}>
<div >
<input type='checkbox' /> First class
</div>
<div>
<input type='checkbox' /> Business
</div>
<div>
<input type='checkbox' /> Economy
</div>
<div>
<input type='checkbox' /> Comfort
</div>
</div>

</div>

</div>

  <div className='col-6' >
{TicketsData? <Card   style={{ border:"none",width:"45%",marginTop:"15%",marginLeft:"28%" }}>
<div className='row'>
<div style={{display:"flex"}}>
    <Card.Body className='col-4'><p style={{fontWeight:"bold",color:"#004d40"}}> From</p><p  style={{color:"green"}}> {localStorage.getItem("fromCity")}</p></Card.Body>
    <Card.Body className='col-4'> <FcAdvance size="2rem"/><p><GiBus size="2.5rem" /></p> </Card.Body>
    <Card.Body className='col-4'><p style={{fontWeight:"bold"}}>To</p><p  style={{color:"green"}}> {localStorage.getItem("toCity")}</p></Card.Body>
  </div>
    </div>
  </Card>:null}
  

  <div>
  {TicketsData? <Card className="card-style" border='light' style={{ color: "black", width: "100%", backgroundColor: "#f6f6f9" ,marginBottom:"10px" }}>
  <Card.Body >
    <div style={{ display: 'flex', flexDirection: 'row'  }}>
    <p style={{ color: '#008b02', fontSize: '.9rem', marginRight: '10px' }}>{TicketsData["updated-tickets-from"]}</p>
    <CiRoute size="1.5rem" />
    <p style={{ color: '#008b02', fontSize: '.9rem', marginLeft: '10px' }}>{TicketsData["updated-tickets-to"]}</p>
    </div>
    
    <div className='row'>
    <Card.Body className='col-3'><p style={{fontWeight:"bold",color:"#1e2320"}}> time </p> <p  style={{color:"#008b02",fontSize:"1.5rem",fontWeight:"bold"}}>{TicketsData["updated-tickets-time"]}</p></Card.Body>
    <Card.Body className='col-3'><p style={{fontWeight:"bold",color:"#1e2320"}}> Price</p> <p  style={{color:"#008b02",fontSize:"1.5rem",fontWeight:"bold"}}>{TicketsData["updated-ticketPrice"]}</p></Card.Body>
    <Card.Body className='col-3'><p  style={{ color: "#008b02", fontWeight: "bold",paddingTop:"20px"}}>{TicketsData["updated-tickets-classes"]}</p></Card.Body>
   {book ?<Card.Body className='col-3'> <button onClick={handelremove} className='btn btn-sm btn-danger ' style={{ padding: "20px 20px", fontSize: "0.8rem",borderRadius:"20px" }}>Remove Ticket</button></Card.Body>: 
   <Card.Body className='col-3'> <button onClick={handelBook} className='btn btn-sm btn-warning ' style={{ padding: "20px 20px", fontSize: "0.8rem",borderRadius:"20px" }}>Book Ticket</button></Card.Body> }
   <div style={{color:"red"}}>Available {TicketsData["updated-numberoftravelrs"]} seats</div>

    </div> 
  </Card.Body>
</Card>:<Card  style={{ border:"none",width:"50%",marginTop:"20%",marginLeft:"30%",backgroundColor:"#f6f6f9" }}><Card.Body style={{fontWeight:"bold"}}>there is no tickets available, Back to complete your data</Card.Body> </Card>}
</div>



</div>

<div className='col-3' >
{book ? <Card style={{ width: "87%", height: "40%", marginTop: "15%", boxShadow: "1px 1px 2px 2px #d9d9d9", border: "none" }}>
<Card.Title style={{  marginLeft: "20px" }}>
    {localStorage.getItem("fromCity") === 1 ? (
        <p> {localStorage.getItem("numoftickets")} passenger</p>
    ) :<p>{localStorage.getItem("numoftickets")} passengers</p> }
</Card.Title>
  <Card.Body>
  <div className='row' style={{ backgroundColor:"#f4f4f4" ,borderBottom: "1px solid #d9d9d9",borderTop: "1px solid #d9d9d9", paddingTop: "5px" }}>
  <p style={{color:"#b1b2b3"}}>{localStorage.getItem("fromCity")} | {localStorage.getItem("toCity")}</p>
  {daydate && (
      <p style={{ marginLeft: '10px', fontSize: '1rem' }}>
          {new Date(daydate).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
      </p>
  )}
</div>
<div>
    <p>Total</p>
    <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
     {localStorage.getItem("numoftickets") * TicketsData["updated-ticketPrice"]} EGP
    </p>
</div>



<div style={{ display: "flex", justifyContent: "center" }}>
    <button  className='btn btn-sm btn-success' style={{ fontSize: "1.3rem", borderRadius: "10px" }}>Book Ticket</button>
</div>

    
     

  </Card.Body>
</Card>




    
    
    
    
    

    :<Card style={{ width: "87%", height: "32%", marginTop: "15%", boxShadow: "1px 1px 2px 2px #d9d9d9", border: "none" }}>
<Card.Title style={{ display: "flex" ,marginLeft:"20px", }}>Tickets</Card.Title>
  <Card.Body>
      <p style={{ display: "flex", justifyContent: "center" }}>
          <GiTicket size="2.7rem"  style={{marginBottom:"10px"}}/>
      </p>
      <p>Choose your trip from the right side</p>
  </Card.Body>
</Card>




}


  

</div>
</div>


</>

)};
    export default SideBar;