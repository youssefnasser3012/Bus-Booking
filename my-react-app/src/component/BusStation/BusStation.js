import React from 'react';
import NavigationBar from '../navbar/NAvigationBar';
import { Card } from 'react-bootstrap';
import { BusStationD } from './DataBusStation';

const BusStation = () => {
    

    return (
        <>
        
            <NavigationBar />
            <div class='row text-center justify-content-center pt-4 '>
            {BusStationD.map((item,index) => (
                
                <Card key={index.id} style={{ width: '18rem',marginLeft:'10px',marginBottom:'40px' }}>
                    <Card.Body>
                        <Card.Title style={{color:"green"}} >{item.name}</Card.Title>
                        <Card.Text>{item.Address}</Card.Text>
                        <Card.Link style={{textDecoration:"none",color:"green"}} href={item.Link}>Location</Card.Link>
                    </Card.Body>
                </Card>
               
            ))}
            </div>
        </>
    );
};

export default BusStation;
