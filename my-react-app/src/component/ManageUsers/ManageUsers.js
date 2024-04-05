import React, { useRef, useState } from 'react';
import { Table,Form } from 'react-bootstrap';
import Navbar from  '../Account/navbar';


const ManageUsers = () => {


    // Function to handle the change in user type
    
    const email = useRef('');
    const username = useRef('');
    const password = useRef('');
    const role = useRef(''); 



    
    const handleAdd = () => {
        // Retrieve existing users from local storage
        
        // Construct the object with the form data
        const newUser = {
            'password': password.current.value,
            'email': email.current.value,
            'username': username.current.value,
            'role': role.current.value // Add role to the sign-up data
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
        role.current.value='';
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
                            <th>User Name</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>Role</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                           
                            <td><input type="text"  placeholder="Enter UserName" className="form-control form-control-sm no-margin" ref={(ref)=>username.current=ref} /> </td>
                            <td><input type="email"  placeholder="Enter Email" className="form-control form-control-sm no-margin" ref={(ref)=>email.current=ref} /></td>
                            <td><input type="password" placeholder="Enter Password" className="form-control form-control-sm no-padding no-margin" ref={(ref)=>password.current=ref}/></td>
                            <td>   
                           
                            <td> <div>
                            
                            <Form.Select style={{  borderRadius: "20px" }} ref={(ref)=>role.current=ref} >
                                <option>Select City</option>
                                <option value="Admin">Admin</option>
                                <option value="Traveler">Traveler</option>
                            </Form.Select>
                        </div></td>
                            
                        
                        </td>
                        <td>
                        <div className='row'>
                            <button className='btn btn-sm btn-success mx-auto row m-2 ' style={{margin:"30px"}} onClick={handleAdd} > Add </button>{' '}
                            <button className='btn btn-sm btn-danger mx-auto row m-2 'onClick={handleDelete} >Delete</button>{'  '}
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
