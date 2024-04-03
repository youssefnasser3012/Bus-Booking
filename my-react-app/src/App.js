import React from 'react'
import {  Route, Routes }from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home'
import SignUp from './component/Account/SignUp'
import Signin from './component/Account/Signin'
import Contact from './component/contact/Contact'
import Error from './component/Error/Error'
import History from './component/History/History'
import TravelDistination from './component/TravelDistination/TravelDistination'
import BusStation from './component/BusStation/BusStation'
import Tickets from './component/Tickets/Tickets'
import OurClasses from './component/OurClasses/OurClasses'
import  Footer  from './component/Footercomponent/Footer';
import Create from './component/CRUD/Create';
import ShowTrips from './component/Trips/ShowTrips';
import UpdateTickets from './component/CRUD/UpdateTickets';
import ManageUsers from './component/ManageUsers/ManageUsers'
import Request from './component/Request/Request';


function App() {
    

    return (
        <>




        <Routes>
        <Route path="*" element={<Error/>} ></Route>
        <Route path="/" element ={<Home/>} exact></Route>
        <Route path="/contactus" element={<Contact/>} ></Route>
        <Route path="/signin" element={<Signin/>} ></Route>
        <Route path="/signup" element={<SignUp/>} ></Route>
        <Route path="/travelsistination" element={<TravelDistination/>} ></Route>
        <Route path="/tickets" element={<Tickets/>} ></Route>
        <Route path="/traveldistination" element={<TravelDistination/>} ></Route>
        <Route path="/history" element={<History/>} ></Route>
        <Route path="/busstation" element={<BusStation/>} ></Route>
        <Route path="/ourclasses" element={<OurClasses/>} ></Route>
        <Route path="/addroutes" element={<Create/>} ></Route>
        <Route path="/showtrips" element={<ShowTrips/>} ></Route>
        <Route path="/updatetickets" element={<UpdateTickets/>} ></Route>
        <Route path="/manageusers" element={<ManageUsers/>} ></Route>
        <Route path="/request" element={<Request/>} ></Route>

        
        
        </Routes>
        

        
        <Footer/>
        </>

 
    );



}

export default App;
