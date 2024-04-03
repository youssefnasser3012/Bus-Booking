import React, { useState, useEffect } from 'react';
import TicketNavigationBar from './TicketsNavbar';
import { Card, Form } from 'react-bootstrap';
import { FaLocationDot } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import Alert from 'react-bootstrap/Alert';
import { FcConferenceCall } from "react-icons/fc";
import { IoTicket } from "react-icons/io5";
import './Tickets.css';

const Tickets = () => {



    const  UserRole= JSON.parse(localStorage.getItem('UserRole'));
    
    const signin = JSON.parse(localStorage.getItem('signin'));
  
    const issignIn  = signin !== null;

    // const signup = JSON.parse(localStorage.getItem('signup'));
  
    // const issignup = signup !== null;

  
    const Admin = (issignIn)  && (signin.email ===UserRole.email ) && (signin.password ===UserRole.password)  ? true:false;
    
   
   
    const [value, setValue] = useState(1);
    const [fromCity, setFromCity] = useState("");
    const [toCity, setToCity] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
   

    const increment = () => {
        setValue((x) => {
            const newValue = x <= 5 ? x + 1 : 1;
            if(newValue<6){
            localStorage.setItem("numoftickets", newValue);
            return newValue;}
            else{
                return newValue;
            }
        });
    }

    const decrement = () => {
        setValue((x) => {
            const newValue = x > 1 ? x - 1 : 0;
            
                localStorage.setItem("numoftickets", newValue);
                return newValue;
           
        });
    }

    const handleFromCityChange = (e) => {
        const city = e.target.value;
        setFromCity(city);
        localStorage.setItem("fromCity", city);
    }

    const handleToCityChange = (e) => {
        const city = e.target.value;
        setToCity(city);
        localStorage.setItem("toCity", city);
    }

    const handleDateChange = (e) => {
        const date = e.target.value;
        setSelectedDate(date);
        localStorage.setItem("selectedDate", date);
    }

    useEffect(() => {
        const valueFromLocalStorage = localStorage.getItem("numoftickets");
        const fromCityFromLocalStorage = localStorage.getItem("fromCity");
        const toCityFromLocalStorage = localStorage.getItem("toCity");
        const selectedDateFromLocalStorage = localStorage.getItem("selectedDate");

        if (valueFromLocalStorage) {
            setValue(parseInt(valueFromLocalStorage));
        }

        if (fromCityFromLocalStorage) {
            setFromCity(fromCityFromLocalStorage);
        }

        if (toCityFromLocalStorage) {
            setToCity(toCityFromLocalStorage);
        }

        if (selectedDateFromLocalStorage) {
            setSelectedDate(selectedDateFromLocalStorage);
        }
    }, []);

    return (
        <>
            <TicketNavigationBar />
            <div className="BK">
                <div className="row ">
                    <div className="col-md-8">
                        <Card style={{ width: '30rem', height: '30rem', borderRadius: '15px', margin: "9rem", backgroundColor: '#F5F5F5' }}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold', paddingBottom: '10px', marginBottom: '35px', boxShadow: ' 3px 3px 3px #D3D3D3', color: "#008080" }}><IoTicket size='1.8rem' /> Book Bus</Card.Title>
                                <div className="d-flex flex-row align-items-center">
                                    <div style={{ marginRight: '40px' }}>
                                        <Form.Label style={{ color: "#2F4F4F" }}><FaLocationDot /> From</Form.Label>
                                        <Form.Select style={{ backgroundColor: '#F4A460', borderRadius: "20px" }} value={fromCity} onChange={handleFromCityChange}>
                                            <option>Select City</option>
                                            <option value="Cairo">Cairo</option>
                                            <option value="Giza">Giza</option>
                                            <option value="Aswan">Aswan</option>
                                        </Form.Select>
                                    </div>
                                    <div>
                                        <Form.Label style={{ color: "#2F4F4F" }}><FaLocationDot /> To</Form.Label>
                                        <Form.Select style={{ backgroundColor: '#F4A460', borderRadius: "20px" }} value={toCity} onChange={handleToCityChange}>
                                            <option>Select City</option>
                                            <option value="Alexandria">Alexandria</option>
                                            <option value="Aswan">Aswan</option>
                                            <option value="Luxor">Luxor</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div style={{ marginRight: '10px', marginTop: '50px' }}><FcCalendar style={{ marginBottom: '5px' }} size='2.5rem' /> <input style={{ display: 'inline-block', backgroundColor: " #DCDCDC", border: '2px solid #FF6347', borderRadius: '8px', padding: "5px", marginLeft: "11px" }} type="date" id="date" name="date" min="2024-01-01" max="2024-12-31" value={selectedDate} onChange={handleDateChange} /></div>
                                <div style={{ marginTop: '30px' }}>
                                    <FcConferenceCall size="2.5rem" />
                                    <div style={{ display: 'inline-block', backgroundColor: " #F4A460", border: '2px solid #F4A460', borderRadius: '8px', padding: "1px", marginLeft: "20px" }}>
                                        <button style={{ borderRadius: '8px', backgroundColor: "#F4A460", color: "#fff", padding: "5px 10px", border: "none" }} onClick={decrement}>-</button>
                                        <span style={{ padding: "5px" }}>{value}</span>
                                        <button style={{ borderRadius: '8px', backgroundColor: "#F4A460", color: "#fff", padding: "5px 10px", border: "none" }} onClick={increment}>+</button>
                                    </div>
                                </div>

                                {value > 5 ? <Alert style={{ padding: "3px", width: "40%" }} variant='danger'>You have only 5 tickets</Alert> : ""}
                                {value === 0 ? <Alert style={{ padding: "3px", width: "60%" }} variant='danger'>You must choose at least one ticket</Alert> : ""}
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                                        <Card.Link style={{ borderRadius: "8px", padding: "5px 10px", textAlign: "center", backgroundColor: "#008080", textDecoration: "none", color: "#fff" }} href="/showtrips">Show Trips</Card.Link>
                                
                                    </div>
                                </div>
                                <p></p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tickets;
