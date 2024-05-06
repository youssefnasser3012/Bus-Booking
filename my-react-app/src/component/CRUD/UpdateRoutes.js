import React, { useEffect, useRef, useState } from 'react';
import NavigationBar from '../navbar/NAvigationBar';
import './Create.css';
import { Table } from 'react-bootstrap';
import { PiMapPinLineDuotone } from "react-icons/pi";
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateRoutes = () => {
    const [routes, setRoutes] = useState([]);
    const fromRefs = useRef({});
    const toRefs = useRef({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoutes = async () => {
            try {
                const response = await axios.get('http://localhost:5270/api/Destination/GetAll');
                setRoutes(response.data);
            } catch (error) {
                console.error('Error fetching routes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoutes();
    }, []);

    const handleUpdate = async (route) => {
        const updatedRoute = {
            from: fromRefs.current.value,
            to: toRefs.current.value,
            appointmentId: route.appointmentId,
            // "destinationId": 0,
        };

        try {
            const response = await axios.put('http://localhost:5270/api/Destination/Update', updatedRoute);
            console.log('Updated successfully:', response.data);
            // Refresh routes after update
            const updatedRoutes = routes.map(r => r.appointmentId === route.appointmentId ? response.data : r);
            setRoutes(updatedRoutes);
        } catch (error) {
            console.error('Error updating route:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5270/api/Destination/Delete/${id}`);
            console.log('Deleted successfully:', response.data);
            // Refresh routes after deletion
            const updatedRoutes = routes.filter(route => route.appointmentId !== id);
            setRoutes(updatedRoutes);
        } catch (error) {
            console.error('Error deleting route:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavigationBar />
            <div className='pb-4'>
                <div className="update-routes p-5">
                    <h3 className='text-center m-3 pb-5'>Update Routes</h3>
                    <div className="row justify-content-center pb-5">
                        <Table striped bordered hover size="sm" responsive="md">
                            <thead>
                                <tr>
                                    <th>Appointment ID</th>
                                    <th><PiMapPinLineDuotone size="1.4rem" />From</th>
                                    <th><PiMapPinLineDuotone size="1.4rem" />To</th>
                                    <th>Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                {routes.map(route => (
                                    <tr key={route.appointmentId}>
                                        <td>{route.appointmentId}</td>
                                        <td><input type="text" defaultValue={route.from} ref={(ref) => fromRefs.current= ref} className="form-control form-control-sm no-margin" /></td>
                                        <td><input type="text" defaultValue={route.to}  ref={(ref) => toRefs.current= ref} className="form-control form-control-sm no-padding no-margin" /></td>
                                        <td>
                                            <button className='btn btn-sm btn-success mx-auto' onClick={() => handleUpdate(route)}>Update</button>{' '}
                                            <button className='btn btn-sm btn-danger mx-auto' onClick={() => handleDelete(route.appointmentId)}>Delete</button>{' '}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    <Link to='/addroutes'>Add Routes</Link>
                </div>
            </div>
        </>
    );
};

export default UpdateRoutes;
