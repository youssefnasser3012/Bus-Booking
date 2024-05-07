import "./SideBar.css";
import { Card } from 'react-bootstrap';
import { FcAdvance } from "react-icons/fc";
import { GiBus } from "react-icons/gi";
import { CiRoute } from "react-icons/ci";
import { GiTicket } from "react-icons/gi";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SideBar = () => {
    const [book, setBook] = useState(false);
    const [tickets, setTickets] = useState(null);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const from = localStorage.getItem("fromCity");
    const to = localStorage.getItem("toCity");

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get(`http://localhost:5270/api/Destination/Filter?fromLocation=${from}&to=${to}`);
                setTickets(response.data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, [from, to]);

    const handleBook = (ticket) => {
        setSelectedTicket(ticket);
        setBook(true);
    }

    const handleRemove = () => {
        setSelectedTicket(null); // Reset selected ticket
        setBook(false);
    }

    const handleConfirmBooking = () => {
        // Implement booking logic here
        // Once booking is successful, you can display the bill details
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}>
                <Card className="card-style col-11" border='light' style={{ marginTop: "1rem", paddingLeft: "5%", color: "black", width: "70%", backgroundColor: "#f6f6f9" }}>
                    <div className='row'>
                        <Card.Body className='col-3'><p style={{ fontWeight: "bold", color: "#1e2320" }}> From </p><p style={{ paddingTop: '5px', color: "#008b02", fontSize: "1.09rem" }}> {localStorage.getItem("fromCity")}</p></Card.Body>
                        <Card.Body className='col-3'><p style={{ fontWeight: "bold", color: "#1e2320" }}>To </p><p style={{ paddingTop: '5px', color: "#008b02", fontSize: "1.09rem" }}> {localStorage.getItem("toCity")}</p></Card.Body>
                        <Card.Body className='col-3'><p style={{ fontWeight: "bold", color: "#1e2320" }}>Numbers Of Tickets </p><p style={{ paddingTop: '5px', paddingLeft: '4rem', color: "#008b02", fontSize: "1.09rem" }}> {localStorage.getItem("numoftickets")}</p></Card.Body>
                    </div>
                </Card>
            </div>

            <div className="row">
                <div className="col-6" style={{ width: "60%", marginLeft: "7%" }}>
                    <div style={{ margin: "50px" }}>
                        {tickets ? (
                            tickets.map(ticket => (
                                <Card key={ticket.destinationId} className="card-style" border="light" style={{ color: "black", width: "100%", backgroundColor: "#f6f6f9", marginBottom: "10px" }}>
                                    <Card.Body>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <p style={{ color: '#008b02', fontSize: '.9rem', marginRight: '10px' }}> {ticket.from}</p>
                                            <CiRoute size="1.5rem" />
                                            <p style={{ color: '#008b02', fontSize: '.9rem', marginLeft: '10px' }}>{ticket.to} </p>
                                        </div>
                                        <div className='row'>
                                            <Card.Body className='col-3'>
                                                <p style={{ fontWeight: "bold", color: "#1e2320" }}> Price </p>
                                                <p style={{ color: "#008b02", fontSize: "1.5rem", fontWeight: "bold" }}> {ticket.price} EGP</p>
                                            </Card.Body>
                                            <Card.Body className='col-3'>
                                                <p style={{ color: "#008b02", fontWeight: "bold", paddingTop: "20px" }}> {ticket.classe}</p>
                                            </Card.Body>
                                            <Card.Body className='col-3'>
                                                {selectedTicket === ticket ? (
                                                    <button className='btn btn-sm btn-danger' style={{ padding: "20px 20px", fontSize: "0.8rem", borderRadius: "20px" }} onClick={handleRemove}>Remove Ticket</button>
                                                ) : (
                                                    <button className='btn btn-sm btn-warning' style={{ padding: "20px 20px", fontSize: "0.8rem", borderRadius: "20px" }} onClick={() => handleBook(ticket)}>Book Ticket</button>
                                                )}
                                            </Card.Body>
                                            <div style={{ color: "red" }}>Available seats {ticket.maxTravelers}</div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <Card style={{ border: "none", width: "50%", marginTop: "10%", marginLeft: "30%", backgroundColor: "#f6f6f9" }}>
                                <Card.Body style={{ fontWeight: "bold" }}>There are no tickets available. Please go back to complete your data.</Card.Body>
                            </Card>
                        )}
                    </div>
                </div>

                <div className='col-3' style={{marginBottom:"5%" }}>
                    <div className="row">
                        {book ? (
                            <Card style={{ marginTop: "15%", boxShadow: "1px 1px 2px 2px #d9d9d9", border: "none" }}>
                                <Card.Title style={{ marginLeft: "20px" }}>
                                    {localStorage.getItem("fromCity") === 1 ? (
                                        <p> {localStorage.getItem("numoftickets")} passenger</p>
                                    ) : <p>{localStorage.getItem("numoftickets")} passengers</p>}
                                </Card.Title>
                                <Card.Body>
                                    <div className='row' style={{ backgroundColor: "#f4f4f4", borderBottom: "1px solid #d9d9d9", borderTop: "1px solid #d9d9d9", paddingTop: "5px" }}>
                                        <p style={{ color: "#b1b2b3" }}>{localStorage.getItem("fromCity")} | {localStorage.getItem("toCity")}</p>
                                        {/* {daydate && ( */}
                                        <p style={{ marginLeft: '10px', fontSize: '1rem' }}>
                                            {/* {new Date(daydate).toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })} */}
                                        </p>
                                        {/* )} */}
                                    </div>
                                    <div>
                                        <p>Total</p>
                                        <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                                            {localStorage.getItem("numoftickets") * selectedTicket.price} EGP
                                        </p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <button className='btn btn-sm btn-success' style={{ fontSize: "1.3rem", borderRadius: "10px" }} onClick={handleConfirmBooking}>Book Ticket</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ) : (
                            <Card style={{ width: "87%", height: "32%", marginTop: "15%", boxShadow: "1px 1px 2px 2px #d9d9d9", border: "none" }}>
                                <Card.Title style={{ display: "flex", marginLeft: "20px", }}>Tickets</Card.Title>
                                <Card.Body>
                                    <p style={{ display: "flex", justifyContent: "center" }}>
                                        <GiTicket size="2.7rem" style={{ marginBottom: "10px" }} />
                                    </p>
                                    <p>Choose your trip from the right side</p>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBar;
