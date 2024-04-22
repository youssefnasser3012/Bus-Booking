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
            const response = await axios.post('http://your-backend-url/api/auth/signup', {
                username: username,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            });

            // Handle the response here if needed
            console.log('Sign-up successful:', response.data);

            // Optionally, you can redirect the user to another page
            // after successful sign-up
            // history.push('/login');
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSignUp}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="form-group mt-3">
                            <label>User Name</label>
                            <input
                                onChange={handleUserName}
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Phone Number</label>
                            <input
                                onChange={handlePhoneNumber}
                                type="number"
                                className="form-control mt-1"
                                placeholder="Enter number"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                onChange={handleSignUpEmail}
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                onChange={handleSignUpPassword}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Retype password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Confirm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
