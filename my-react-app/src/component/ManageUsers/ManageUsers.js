import React, { useRef, useState } from 'react';
import { Table,Form } from 'react-bootstrap';
import Navbar from  '../Account/navbar';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";


const ManageUsers = () => {


    // Function to handle the change in user type
    
    const email = useRef('');
    const username = useRef('');
    const password = useRef('');
   



    
    const handleAdd = () => {
        // Retrieve existing users from local storage
        
        // Construct the object with the form data
        const newUser = {
            'password': password.current.value,
            'email': email.current.value,
            'username': username.current.value,
           
        };

        // Add the new user to the existing users array
       

        // Store the updated users array in local storage
        localStorage.setItem('UserRole', JSON.stringify(newUser));
        clearForm();
    };
    const handleDelete = () => {
        // Clear the form data from local storage
        localStorage.removeItem('UserRole');
        // Clear the form fields after deletion
        clearForm();
    };
    const clearForm = () => {
       password.current.value=''
        email.current.value='';
        username.current.value='';
       
    };

    return (
        <>
            <Navbar />
            <div className="ubdate-routes p-5 ">
            <h3 className='text-center m-3 pb-5'>Manage Users</h3>
            <div className="row justify-content-center pb-5">
                <Table striped bordered hover size="sm" responsive="md">
                    <thead>
                        <tr>
                        <th><FaRegUserCircle size="1.4rem" />User Name</th>
                <th><BiLogoGmail size="1.4rem" />Email</th>
               
                <th><MdAdminPanelSettings size="1.5rem" />Current Role </th>
                
                <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td><input type="text"  placeholder="Enter UserName" className="form-control form-control-sm no-margin" ref={(ref)=>username.current=ref} /> </td>
                            <td><input type="email"  placeholder="Enter Email" className="form-control form-control-sm no-margin" ref={(ref)=>email.current=ref} /></td>
                            <td><input type="password" placeholder="Enter Password" className="form-control form-control-sm no-padding no-margin" ref={(ref)=>password.current=ref}/></td>
                            <td>
                           
              <div style={{width:"70%"}}>

              <Form.Select style={{  borderRadius: "20px" }} >
                                            <option>Select Role</option>
                                            <option value="Alexandria">ADMIN</option>
                                            <option value="Aswan">traveler</option>
                                          
                                        </Form.Select>

              </div>
             

                            </td>
                        <td>
                        <div className='row'>
                            <button className='btn btn-sm btn-success mx-auto row m-2 ' style={{margin:"30px"}} onClick={handleAdd} > Add </button>{' '}
                           
                            </div>
                        </td>
                        
                           
                            
                        
                        </tr>
                    </tbody>
                </Table>
               
            </div>
            </div>
        </>
    );
};

export default ManageUsers;
