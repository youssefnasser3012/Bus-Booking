import React, { useState } from 'react';
import NavigationBar from '../navbar/NAvigationBar'
import './Create.css';
import { Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';                //UPDATE-ROUTES
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcEditImage } from "react-icons/fc";

const Create = () => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [image, setImage] = useState('');

    const handleFromChange = (e) => {
        setFrom(e.target.value);
    };

    const handleToChange = (e) => {
        setTo(e.target.value);
    };



    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleAdd = () => {
        // Construct the object with the form data
        const routesData = {
        
            'updated-routes-from': from,
            'updated-routes-to': to,
            
            'updated-routes-image': image,
            
        };
        // Store the form data in local storage
        localStorage.setItem('routesData', JSON.stringify(routesData));

        // Clear the form fields after saving
        clearForm();
    };

    const handleDelete = () => {
        // Clear the form data from local storage
        localStorage.removeItem('routesData');
        // Clear the form fields after deletion
        clearForm();
    };

    const clearForm = () => {
      
        setFrom('');
        setTo('');
        setImage('');
    };

    return (
        <>
            <NavigationBar />
            <div className="ubdate-routes p-5 ">
                <h3 className='text-center m-3 pb-5'>Update Routes</h3>
                <div className="row justify-content-center pb-5">
                    <Table striped bordered hover size="sm" responsive="md">
                        <thead>
                            <tr>
                                <th><FaRoute size="1.4rem" /></th>
                                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                                <th><FcEditImage size="1.5rem" /> Image</th>
                                <th>Event</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><input type="text" value={from} onChange={handleFromChange} placeholder="Enter City" className="form-control form-control-sm no-margin" /></td>
                                <td><input type="text" value={to} onChange={handleToChange} placeholder="Enter City" className="form-control form-control-sm no-padding no-margin" /></td>
                                <td><input type="file" accept="image/*" onChange={handleImageChange} /></td>
                                <td>
                                    <button className='btn btn-sm btn-success mx-auto' onClick={handleAdd}> Add </button>{' '}
                                    <button className='btn btn-sm btn-danger mx-auto' onClick={handleDelete}>Delete</button>{'  '}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default Create;
