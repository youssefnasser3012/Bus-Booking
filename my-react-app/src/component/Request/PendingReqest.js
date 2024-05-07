import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { PiMapPinLineDuotone } from "react-icons/pi";
import { FcClock } from "react-icons/fc";
import { PiUsersThreeDuotone } from "react-icons/pi";

const PendingRequests = () => {
    const [appointments, setAppointments] = useState([]);
    

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
                const response = await axios.get(`http://localhost:5270/api/TravellerRequest?id=${userId}`);
                setAppointments(response.data);
                console.error('the id is ', userId);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="update-routes p-5">
            <h3 className='text-center m-3 pb-5'>Pending Appointments</h3>
            <div className="row justify-content-center pb-5">
            {appointments.map(appointment => (
                <Table striped bordered hover size="sm" responsive="md">
                    <thead>
                        <tr>
                        <th><PiUsersThreeDuotone size="1.5rem" /> username</th>
                            <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                            <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                            <th><FcClock size="1.6rem" /> Date and Time</th>
                            <th>
                <div className='row  mt-3'>
                    <div style={{color:"red",fontWeight:"bold"}}>status</div>
                    
                    </div>
                </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            <tr key={appointment.appointmentId}>
                                 <td>{appointment.username}</td>
                                <td>{appointment.from}</td>
                                <td>{appointment.to}</td>
                                <td>{appointment.departureTime}</td>
                                
                                
                                <td>
                                    <div className='row mt-3'>
                                        <div style={{ color: appointment.state === 'Pending' ? 'red' : 'green', fontWeight: "bold" }}>{appointment.status}</div>
                                    </div>
                                </td>
                            </tr>
                      
                    </tbody>
                </Table>
            ))}
            </div>
        </div>
    );
};

export default PendingRequests;