import React from 'react';
import { Button,Card} from 'react-bootstrap';
import NavigationBar from '../navbar/NAvigationBar';
import { TravelDisData } from './TravelDistData';

import './TravelDistination.css'
import { FaArrowRight } from "react-icons/fa";

const TravelStation=()=>{
    return(
    <>
<NavigationBar/> 
<div className='row'>
{TravelDisData.map((item)=>(

    <Card className="p-0 m-5 " style={{ width: '18rem' }}>
<Card.Img variant="top" style={{maxHeight:"190px"}} src={item.Image} />
<Card.Body>
<Card.Title>{item.city}</Card.Title>
<Button variant="success">Book Ticket <FaArrowRight/></Button>
</Card.Body>
</Card>
))}


</div>





</> 
)

    
    
    
    
    };
    export default TravelStation;