import React, { useRef, useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { MdAdminPanelSettings } from "react-icons/md";
import NavigationBar from '../navbar/NAvigationBar';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const roleRef = useRef(null); // Define role as a ref

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5270/api/crudU/GetAll');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateUser = async (user) => {
    const updatedRole = roleRef.current.value;
    if (updatedRole !== null) {
      try {
        const userUpdated = {
          username: user.username,
          userId: user.userId,
          email: user.email,
          role: updatedRole 
        };
        await axios.put('http://localhost:5270/api/crudU/Update', userUpdated);
        console.log("User Updated successfully");
        const response = await axios.get('http://localhost:5270/api/crudU/GetAll');
        setUsers(response.data);
      } catch (error) {
        console.error('Error updating user:', error);
      }
    }
  };

  const handleDelete = async (user) => {
    try {
      const deletedUser = {
        username: user.username,
        userId: user.userId,
        email: user.email,
        role: roleRef.current?.value
      };
      await axios.delete('http://localhost:5270/api/crudU/Delete', {
        data: deletedUser, 
        headers: {
          'Content-Type': 'application/json', 
        }
      });
      const response = await axios.get('http://localhost:5270/api/crudU/GetAll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="update-routes p-5">
        <h3 className='text-center m-3 pb-5'>Users</h3>
        <div className="row justify-content-center pb-5">
        {users.map(user => (
          <Table striped bordered hover size="sm" responsive="md">
            <thead>
              <tr>
                <th><FaRegUserCircle size="1.4rem" />User ID</th>
                <th><FaRegUserCircle size="1.4rem" />User Name</th>
                <th><BiLogoGmail size="1.4rem" />Email</th>
                <th><MdAdminPanelSettings size="1.5rem" />Current Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             
                <tr key={user.userId}>
                  <td>{user.userId}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <div>{user.role}</div>
                    <Form.Select style={{ borderRadius: "20px" }} ref={roleRef}  >
                      <option>Select City</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </Form.Select>
                  </td>
                  <td>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ width: "40%" }}>
                        <button className='btn btn-sm btn-warning mx-auto row m-2' onClick={() => handleUpdateUser(user)}>Update</button>
                        <button className='btn btn-sm btn-danger mx-auto row m-2' onClick={() => handleDelete(user)}>Delete</button>
                      </div>
                    </div>
                  </td>
                </tr>
           
            </tbody>
          </Table>
        ))}
        </div>
        <Link to='/ManageUsers'><div>Manage Users</div></Link>
      </div>
    </>
  );
};

export default ShowUsers;
