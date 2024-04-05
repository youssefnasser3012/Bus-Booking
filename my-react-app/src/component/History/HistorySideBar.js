import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Table} from 'react-bootstrap';
import { useState } from 'react';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { FcClock } from "react-icons/fc";
import { PiMapPinLineDuotone } from "react-icons/pi";

const HistorySideBar=()=>{
    
    
    

    return(
        <>
    

    
    <div className='side-bar col-3 ' bg='light' style={{ height:"50rem", width:"100%",boxShadow:"0px 0px 1px 0px #9d9f9e"}}>
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

   



</>

)};
    export default HistorySideBar;