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



const Request = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5270/api/TravellerRequest/GetAll'); 
                console.log('API Response:', response.data); // Log the response data
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };
        fetchRequests();
    }, []);
    
  
  
    const handleAccept = async (requestId) => {
        try {
            await axios.put('http://localhost:5270/api/TravellerRequest/Accept', { requestId });
            // Fetch the updated requests after accepting the request
            const response = await axios.get('http://localhost:5270/api/TravellerRequest/GetAll');
            setRequests(response.data);
        } catch (error) {
            console.error('Error accepting request:', error);
        }
    };
    
    const handleDecline = async (requestId) => {
        try {
            await axios.put('http://localhost:5270/api/TravellerRequest/Decline', { requestId });
            // Fetch the updated requests after declining the request
            const response = await axios.get('http://localhost:5270/api/TravellerRequest/GetAll');
            setRequests(response.data);
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
                {requests.map(request => (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Id</th>
                                <th>User Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                                <tr key={request.userId}>
                                    <td>{request.userId}</td>
                                    <td>{request.username}</td>
                                    <td>{request.from}</td>
                                    <td>{request.to}</td>
                                    <td>{request.departureTime}</td>
                                    <td>
                                    <div className="d-flex justify-content-center">
    <button className='btn btn-success m-1' onClick={() => handleAccept(request.userId)}>Accept</button> {' '}
    <button className='btn  btn-danger m-1' onClick={() => handleDecline(request.userId)}>Decline</button>{' '}
    </div>
    
</td>
                                </tr>
                         
                        </tbody>
                    </table>
                ))}
                </div>
            </div>
        </>
    );
};

export default Request;