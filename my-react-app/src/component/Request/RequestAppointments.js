import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { Form, Table } from 'react-bootstrap';
import { FaRoute } from "react-icons/fa6";
import NavigationBar from '../navbar/NAvigationBar';
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiUserSquareDuotone } from "react-icons/pi";
import React, { useState, useEffect } from 'react';
import { jwtDecode as jwt_decode } from 'jwt-decode';
import axios from 'axios';



const RequestAppointments = () => {
    const [requests, setRequests] = useState([]);
    const token = localStorage.getItem('token');
    const headers = {
        Authorization:  `Bearer ${token}`    ,
      };
      const userId = localStorage.getItem('userId');
      const userrole = localStorage.getItem('userole');
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('http://localhost:5270/api/Destination/GetWjoin'); // Update API endpoint
                setRequests(response.data);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };
        fetchRequests();
    }, []);

    const handleRequestTicket = async (request) => {
        try {
            const { destinationId, appointmentId } = request;
            const requestBody = {
                requestId: 0,
                userId:userId, 
                appointmentId,
                status: 'Pending',
                destinationId,
            };
            const response = await axios.post('http://localhost:5270/api/TravellerRequest/Create', requestBody); // Update API endpoint
            console.log('Request ticket response:', response.data);
            // Handle success or display a success message
        } catch (error) {
            console.error('Error requesting ticket:', error);
            // Handle error or display an error message
        }
    };

    return (
        <>
            <NavigationBar />
            <div className="update-routes p-5">
                <h3 className='text-center m-3 pb-5'>All Aailable Trips</h3>
                <div className="row justify-content-center pb-5">
                    <Table striped bordered hover size="sm" responsive="md">
                        <thead>
                            <tr>

                            
                                <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                                <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                                <th><FcClock size="1.6rem" /> Date and Time</th>
                                <th><PiUsersThreeDuotone size="1.5rem" />class</th>
                                
                                <th><FcMoneyTransfer size="1.6rem" /> Price</th>
                              
                                <th>Event</th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests.map(request => (
                                <tr>
                                    



                                    <td><div className='mt-4' style={{ fontWeight: "bold" }}>{request.from}</div></td>
                                    <td><div className='mt-4' style={{ fontWeight: "bold" }}>{request.to}</div></td>
                                    <td><div className='mt-4' style={{ fontWeight: "bold" }}>{request.departureTime}

                                    </div> </td>
                                    <td><div className='mt-4' style={{ fontWeight: "bold" }}>{request.classe}</div></td>
                                   
                                    




                                    <td><div className='mt-4' style={{ fontWeight: "bold" }}>{request.price}LE</div></td>
                                    

                                    <td>
                                        <div className='row  mt-3'>
                                            <button onClick={() => handleRequestTicket(request)} className='btn btn-sm btn-success mx-auto row m-2'>Request Ticket</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </Table>
                </div>
            </div>

        </>

    )


};
export default RequestAppointments;