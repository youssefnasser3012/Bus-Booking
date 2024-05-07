import React, { useEffect, useState } from 'react';
import NavigationBar from '../navbar/NAvigationBar';
import './Create.css';
import { Table } from 'react-bootstrap';
import { PiMapPinLineDuotone } from "react-icons/pi";
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateRoutes = () => {
    const [routes, setRoutes] = useState([]);
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

    const handleUpdate = async (route, index) => {
        const updatedRoute = {
            from: route.from,
            to: route.to,
            appointmentId: route.appointmentId,
            destinationId: route.destinationId,
        };

        try {
            const response = await axios.put('http://localhost:5270/api/Destination/Update', updatedRoute);
            console.log('Updated successfully:', response.data);
            // Update the specific route in the state without changing its position
            setRoutes(prevRoutes => {
                const updatedRoutes = [...prevRoutes];
                updatedRoutes[index] = response.data;
                return updatedRoutes;
            });
        } catch (error) {
            console.error('Error updating route:', error);
        }
    };

    const handleDelete = async (destinationId) => {
        try {
            const response = await axios.delete(`http://localhost:5270/api/Destination/Delete/${destinationId}`);
            console.log('Deleted successfully:', response.data);
            // Remove the deleted route from the state
            setRoutes(prevRoutes => prevRoutes.filter(route => route.destinationId !== destinationId));
        } catch (error) {
            console.error('Error deleting route:', error);
        }
    };

    const handleInputChange = (e, index, fieldName) => {
        const updatedRoutes = [...routes];
        updatedRoutes[index][fieldName] = e.target.value;
        setRoutes(updatedRoutes);
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
                                {routes.map((route, index) => (
                                    <tr key={route.destinationId}>
                                        <td>{route.appointmentId}</td>
                                        <td><input type="text" value={route.from} onChange={(e) => handleInputChange(e, index, 'from')} className="form-control form-control-sm no-margin" /></td>
                                        <td><input type="text" value={route.to} onChange={(e) => handleInputChange(e, index, 'to')} className="form-control form-control-sm no-padding no-margin" /></td>
                                        <td>
                                            <button className='btn btn-sm btn-warning mx-auto' onClick={() => handleUpdate(route, index)}>Update</button>{' '}
                                            {/* <button className='btn btn-sm btn-danger mx-auto' onClick={() => handleDelete(route.destinationId)}>Delete</button>{' '} */}
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
