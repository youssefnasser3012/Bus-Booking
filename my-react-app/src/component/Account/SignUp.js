import React, { useState } from 'react';
import axios from 'axios';
import './Signin.css';
import './navbar.css';
import Navbar from './navbar';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleUserName = (e) => {
        setUsername(e.target.value);
    };

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSignUpEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSignUpPassword = (e) => {
        setPassword(e.target.value);
    };
    
    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        
    

        try {
            // Make a POST request to the backend API endpoint
            const response = await axios.post('http://localhost:5270/api/auth/register', {
                Username: username,
                Email: email,
                Password: password,
                phoneNumber:phoneNumber
            });

            // Handle the response here if needed
            console.log('Sign-up successful:');
            

            // Optionally, you can redirect the user to another page
            // after successful sign-up
            // history.push('/login');
        } catch (error) {
            console.error('Error signing up:', error.response.data);
        }
        
    };

    return (
        <>
            <Navbar />
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="form-group mt-3">
                            <label>User Name</label>
                            <div style={{width:"110%"}}>
                            <input onChange={handleUserName} type="text" className="form-control mt-1" placeholder="Enter your name"/>
                            </div>
                        </div>
                        
                        <div className="form-group mt-3">
                        <label>Phone Number</label>
                        <div style={{width:"110%"}}>
                        <input onChange={handlePhoneNumber} type="number" className="form-control mt-1" placeholder="Enter number"/>
                        </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <div style={{width:"110%"}}>
                            <input onChange={handleSignUpEmail} type="email" className="form-control mt-1"  placeholder="Enter email" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label>Password</label>
                            <div style={{width:"110%"}}>
                            <input  onChange={handleSignUpPassword}  type="password" className="form-control mt-1" placeholder="Enter password"/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <div style={{width:"110%"}}>
                            <input type="password" className="form-control mt-1" placeholder="Retype password"/>
                            </div>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                        <div style={{display:"flex",justifyContent:"center"}} >
                            <button style={{width:"65%",marginBottom:"30px",marginTop:"10px"}} onClick= {handleSignUp} type="submit" className="btn btn-primary">
                                Confirm
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;