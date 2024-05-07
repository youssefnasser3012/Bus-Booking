import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import SignUp from './component/Account/SignUp';
import Signin from './component/Account/Signin';
import Contact from './component/contact/Contact';
import Error from './component/Error/Error';
import History from './component/History/History';
import BusStation from './component/BusStation/BusStation';
import Tickets from './component/Tickets/Tickets';
import Footer from './component/Footercomponent/Footer';
import AddRoutes from './component/CRUD/Create';
import ShowTrips from './component/Trips/ShowTrips';
import UpdateTickets from './component/CRUD/UpdateTickets';
import ManageUsers from './component/ManageUsers/ManageUsers';
import Requestlist from './component/Request/Requestslist';
import Showusers from './component/ManageUsers/showusers';
import AddAppointments from './component/CRUD/AddAppointments';
import UpdateRoutes from './component/CRUD/UpdateRoutes';
import RequestAppointments from './component/Request/RequestAppointments';

function App() {
    const [userRole, setUserRole] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the user is authenticated (e.g., token exists)
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            const decodedToken = jwtDecode(token);
            const role = decodedToken.role; // Assuming the role is stored in the token
            setUserRole(role);
        } else {
            setIsAuthenticated(false);
            setUserRole(null);
        }
    }, []);

    return (
        <>
            <Routes>
                <Route path="error" element={<Error />} />
                <Route path="/" element={<Signin />} exact />
                <Route path="/home" element={<Home />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/history" element={<History />} />
                <Route path="/busstation" element={<BusStation />} />
                <Route path="/showtrips" element={<ShowTrips />} />
                <Route path="/requestappointments" element={<RequestAppointments/>} ></Route>
                {isAuthenticated && (
                    <>
                        {userRole === 'Admin' && (
                            <>
                                <Route path="/addroutes" element={<AddRoutes />} />
                                <Route path="/manageusers" element={<ManageUsers />} />
                                <Route path="/showusers" element={<Showusers />} />
                                <Route path="/addappointment" element={<AddAppointments />} />
                                <Route path="/updateroutes" element={<UpdateRoutes />} />
                                <Route path="/request" element={<Requestlist />} />
                                <Route path="/updatetickets" element={<UpdateTickets />} />
                            </>
                        )}
                        
                        {userRole !== 'Admin' && (
                            <>
                                <Route path="/addroutes" element={<Navigate to="/error" />} />
                                <Route path="/manageusers" element={<Navigate to="/error" />} />
                                <Route path="/showusers" element={<Navigate to="/error" />} />
                                <Route path="/addappointment" element={<Navigate to="/error" />} />
                                <Route path="/updateroutes" element={<Navigate to="/error" />} />
                                <Route path="/updatetickets" element={<Navigate to="/error" />} />
                                <Route path="/request" element={<Navigate to="/error" />} />
                               

                            </>
                        )}
                        
                        
                       
                    </>
                )}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
