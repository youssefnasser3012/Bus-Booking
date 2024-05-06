import React, { useEffect, useRef, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavigationBar from '../navbar/NAvigationBar';
const UpdateTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [update, setUpdate] = useState([]);
    const dateRefs = useRef([]);
    const numofticketsRefs = useRef([]);
    const ticketsPriceRefs = useRef([]);
    const classesRefs = useRef([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get('http://localhost:5270/api/Appointment');
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error); // Log the error message
            }
        };

        fetchTickets();
    }, []);

    const handleUpdate = (ticketId, index) => {
        const updatedTicket = {
            "departureTime": dateRefs.current[index].value,
            "maxTravelers": numofticketsRefs.current[index].value,
            "classe": classesRefs.current[index].value,
            "price": ticketsPriceRefs.current[index].value,
            "appointmentId": ticketId
        };

        axios.put('http://localhost:5270/api/Appointment/Update', updatedTicket)
            .then(response => {
                console.log('Updated successfully:', response.data);
            })
            .catch(error => {
                console.error('Error updating ticket:', error.response.data); // Log the error message
            });
    };

    const handleDelete = async (appointmentId) => {
        try {
            const response = await axios.delete(`http://localhost:5270/api/Appointment/Delete/${appointmentId}`);
            console.log('Deleted successfully:', response.data);
            const updatedTickets = tickets.filter(ticket => ticket.appointmentId !== appointmentId);
            setTickets(updatedTickets);
        } catch (err) {
            console.error('Error deleting ticket:', err.message); // Log the error message
        }
    };

    return (
        <>
            <NavigationBar />
            <div className="update-routes p-5">
                <h3 className="text-center m-3 pb-5">Update Tickets</h3>
                <div className="row justify-content-center pb-5">
                    {tickets.map((ticket, index) => (
                        <Table striped bordered hover size="sm" responsive="md" key={ticket.appointmentId}>
                            <thead>
                                <tr>
                                    <th>Appointment ID</th>
                                    <th>Date and Time</th>
                                    <th>Ticket Price</th>
                                    <th>Class</th>
                                    <th>Number Of Tickets</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ticket.appointmentId}</td>
                                    <td>
                                        <div className='row'> <input className='p-1 m-1' style={{ borderRadius: "8px" }} type="datetime-local" ref={(ref) => dateRefs.current[index] = ref} defaultValue={ticket.departureTime} /> </div>
                                    </td>
                                    <td>
                                        <input className="form-control" type="number" ref={(ref) => ticketsPriceRefs.current[index] = ref} defaultValue={ticket.price} />
                                    </td>
                                    <td>
                                        <Form.Select className="form-select" ref={(ref) => classesRefs.current[index] = ref} defaultValue={ticket.classe}>
                                            <option>Select Class</option>
                                            <option value="First Class">First Class</option>
                                            <option value="Business Class">Business Class</option>
                                            <option value="Primary Class">Primary Class</option>
                                            <option value="Comfort Class">Comfort Class</option>
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <input className="form-control" type="number" ref={(ref) => numofticketsRefs.current[index] = ref} defaultValue={ticket.maxTravelers} />
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <button className="btn btn-warning me-2" onClick={() => handleUpdate(ticket.appointmentId, index)}>Update</button>
                                            <button className="btn btn-danger" onClick={() => handleDelete(ticket.appointmentId)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    ))}
                    <Link to="/addappointment">
                        <button className="btn btn-success">Add Appointments</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default UpdateTickets;
