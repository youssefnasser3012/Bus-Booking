import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { Form,Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import NavigationBar from '../navbar/NAvigationBar';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiUserSquareDuotone } from "react-icons/pi";


import React, { useState, useEffect } from 'react';
import axios from 'axios';

import jwt_decode from 'jwt-decode';


const Request = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5270/api/TravellerRequest/GetAll'); 
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };
        fetchRequests();
    }, []);
  
  
    const handleAccept = async (requestId) => {
        try {
            await axios.put('http://localhost:5270/api/TravellerRequest/Accept/', { requestId });
            // Update the requests state after accepting the request
            const updatedRequests = requests.map(request =>
                request.requestId === requestId ? { ...request, status: 'Accepted' } : request
            );
            setRequests(updatedRequests);
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };
    
    const handleDecline = async (requestId) => {
        try {
            await axios.put('http://localhost:5270/api/TravellerRequest/Decline/', { requestId });
            // Update the requests state after declining the request
            const updatedRequests = requests.map(request =>
                request.requestId === requestId ? { ...request, status: 'Declined' } : request
            );
            setRequests(updatedRequests);
        } catch (error) {
            console.error('Error declining request:', error);
        }
    };
    
    

    return (
        <>
            <NavigationBar/> 
            <div className="update-routes p-5">
                <h3 className='text-center m-3 pb-5'>Requests</h3>
                <div className="row justify-content-center pb-5">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>requestid</th>
                                <th>userid</th>
                                <th>appointementid</th>
                                <th>status</th>
                                <th>destinationid</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map(request => (
                                <tr >
                                    <td>{request.requestId}</td>
                                    <td>{request.userId}</td>
                                    <td>{request.appointmentId}</td>
                                    <td>{request.status}</td>
                                    <td>{request.destinationId}</td>
                                    <td>
    <button className='btn btn-sm btn-success mx-auto m-2' onClick={() => handleAccept(request.requestId)}>Accept</button>
    <button className='btn btn-sm btn-danger mx-auto' onClick={() => handleDecline(request.requestId)}>Decline</button>
</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Request;