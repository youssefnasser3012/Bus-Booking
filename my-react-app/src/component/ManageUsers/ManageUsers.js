import React, { useRef, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import Navbar from '../Account/navbar';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const ManageUsers = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleAdd = async () => {
    const formData = JSON.stringify( {
      userName,
      email,
      role,
      id:0,
    });
    const queryParams = {
        password: password,
      };//https://localhost:7042/api/crudU/Create
    try {
     
      const response = await axios.post('http://localhost:5270/api/crudU/Create', formData, {
      headers: {
        'Content-Type': 'application/json', // Set content type to JSON
      },
      params: queryParams, // Include password as a query parameter
    });
      
      console.log('User added successfully:', response.data);
      clearForm();
      setShowAlert(true);
    } catch (error) {
      console.error('Error adding user:', error.response.data);
      setError(error.response.data);
      setShowAlert(true);
    }
  };

  const clearForm = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setRole('');
  };

  return (
    <>
      <Navbar />
      <div className="update-routes p-5">
        <h3 className='text-center m-3 pb-5'>Manage Users</h3>
        <div className="row justify-content-center pb-5">
          <Table striped bordered hover size="sm" responsive="md">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="text" placeholder="Enter UserName" className="form-control form-control-sm" value={userName} onChange={(e) => setUserName(e.target.value)} /></td>
                <td><input type="email" placeholder="Enter Email" className="form-control form-control-sm" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                <td><input type="password" placeholder="Enter Password" className="form-control form-control-sm" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                <td>
                  <Form.Select style={{ borderRadius: "20px" }} value={role} onChange={(e) => setRole(e.target.value)}>
                    <option>Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </Form.Select>
                </td>
                <td>
                  <div className='row'>
                    <button className='btn btn-sm btn-success mx-auto m-2' onClick={handleAdd}>Add</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
          {showAlert && <Alert variant="danger">{error.title}</Alert>}

        </div>
      </div>
    </>
  );
};

export default ManageUsers;