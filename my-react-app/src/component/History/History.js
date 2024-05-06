import React, {useState} from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './History.css'
import PendingReqest from '../Request/PendingReqest';


const History=()=>{
   
    
    
    
    return(
        <>
        
     
   <Tabs  defaultActiveKey="History" id="uncontrolled-tab-example" className="mb-3 bg-dark"   >
    
    <Tab   eventKey="History" title="History">
      <div className='row'>


<div className='col' style={{display:"flex",justifyContent:"center"}} >

<div className='row'><PendingReqest/></div>
  
</div>
  
  

  </div> 
      </Tab>
    </Tabs>
  
    

    

</>
)

    
    
    
    
    };
    export default History;