import React, { useState,useEffect } from 'react';
import './Signin.css';
import './navbar.css';
import Navbar from './navbar';
import { useNavigate } from 'react-router-dom'; // Updated import
import axios from 'axios';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Alert from 'react-bootstrap/Alert';



const getRoleFromToken = (token) => {
  if (!token) {
    // Token is missing, return null or handle as needed
    return null;
  }

  try {
    const decodedToken = jwtDecode(token);
  //  your JWT payload contains a field named 'role'
    
    return decodedToken;
  } catch (error) {
    // JWT decoding failed, handle the error (e.g., log or return null)
    console.error('Error decoding JWT:', error);
    return null;
  }
};
// Usage example:
/*const token = localStorage.getItem('token');
const role = getRoleFromToken(token);
console.log('User role:', role);*/

export const removeAuthToken = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  }
};

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSigninEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSigninPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:5270/api/auth/login', formData);
            console.log('Sign-up successful:', response.data);
            clearForm();
            navigate('/home');
            const token = response.data.token;

      // Set the token in local storage
    
      localStorage.setItem('token', token);
      const userRole = getRoleFromToken(token);

console.log('User role:', userRole.role);

        } catch (error) {
            console.error(error.response.data);
            setError(error.response.data);
            setShowAlert(true);
        }
    };

    const clearForm = () => {
        setEmail('');
        setPassword('');
    };


    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 5555);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    return (
        <>
            <Navbar />
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSignin}>
                    <div className="Auth-form-content">
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <h3 className="Auth-form-title">Sign In</h3>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Link to="/signup" style={{ textDecoration: 'none', textAlign: 'center' }}>
                                <p>Not registered yet? <span>Sign Up</span></p>
                            </Link>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <div style={{ width: "110%" }}>
                                <input
                                    onChange={handleSigninEmail}
                                    value={email}
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <div style={{ width: "110%" }}>
                                <input
                                    value={password}
                                    onChange={handleSigninPassword}
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <button type="submit" style={{ width: "65%", marginTop: "12px" }} className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p className="forgot-password text-right mt-2">
                                <Link to="/forgot-password" style={{ textDecoration: 'none' }}>Forgot password?</Link>
                            </p>
                        </div>
                        {showAlert && <Alert className='' style={{display:"flex",justifyContent:"center",padding:"10px"}} variant='danger'>Email or Password wrong</Alert>}

                    </div>
                </form>
            </div>
        </>
    );
};

export default Signin;