import React, {useState} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './History.css'
import PendingReqest from '../Request/PendingReqest';
import ApprovedRequest from '../Request/ApprovedRequest';


const History=()=>{
   
    
    
    
    return(
        <>
        
     
   <Tabs  defaultActiveKey="Pending Request" id="uncontrolled-tab-example" className="mb-3 bg-dark"   >
    
    <Tab   eventKey="Pending Request" title="Pending Request">
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

<div className='col-9' >

<div className='row'><PendingReqest/></div>
  
</div>
  
  

  </div>

        
      </Tab>

      <Tab eventKey="Approved Request" title="Approved Request">
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

<div className='col-9' >

<div className='row'><ApprovedRequest/></div>
  
</div>
  
  

  </div>

        
      </Tab>


      
      
    </Tabs>
  
    

    

</>
)

    
    
    
    
    };
    export default History;