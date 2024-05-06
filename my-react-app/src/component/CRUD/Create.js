import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../navbar/NAvigationBar'
import './Create.css';
import { Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';                //UPDATE-ROUTES
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcEditImage } from "react-icons/fc";
import axios from 'axios';

const AddRoutes = () => {
    const fromRef = useRef('');
    const toRef = useRef('');
    const appointmentId = useRef('');
    

   

    const handleAdd =async (e) => {
        e.preventDefault();

        const routesData = {
        
           
          
  "from": fromRef.current.value,
  "to": toRef.current.value,
  "appointmentId": appointmentId.current.value
            
        };


        try {
            // Make the axios post request with signupdata
            const response = await axios.post('http://localhost:5270/api/Destination/Create', routesData);
            console.log('created successfully:');
           
           
        } catch (err) {
            //  console.error(err.response.data);
            
        }

 

        // Store the form data in local storage
        // localStorage.setItem('routesData', JSON.stringify(routesData));

        // Clear the form fields after saving
        clearForm();
    };

    const handleDelete = () => {
        // Clear the form data from local storage
        // localStorage.removeItem('routesData');
        // Clear the form fields after deletion
        clearForm();
    };

    const clearForm = () => {
      
        fromRef.current.value='';
        toRef.current.value='';
        appointmentId.value=''
    };

    return (
        <>
            <NavigationBar />
            <div className='pb-4'>
            <div className="ubdate-routes p-5 ">
                <h3 className='text-center m-3 pb-5'>Update Routes</h3>
                <div className="row justify-content-center pb-5">
                    <Table striped bordered hover size="sm" responsive="md">
                        <thead>
                            <tr>
                                
                                <th>Appointment Id</th>
                                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                               
                                <th>Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                                <td><input type="text" ref={(ref)=>appointmentId.current=ref} placeholder="Enter Appointment ID" className="form-control form-control-sm no-padding no-margin" /></td>
                                <td><input type="text" ref={(ref)=>fromRef.current=ref} placeholder="Enter City" className="form-control form-control-sm no-margin" /></td>
                                <td><input type="text" ref={(ref)=>toRef.current=ref} placeholder="Enter City" className="form-control form-control-sm no-padding no-margin" /></td>
                               
                               
                                <td>
                                    <button className='btn btn-sm btn-success mx-auto' onClick={handleAdd}> Add </button>{' '}
                                    
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
            </div>
        </>
    );
};

export default AddRoutes;
