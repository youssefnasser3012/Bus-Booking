import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Signin.css';
import './navbar.css';
import Navbar from './navbar';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import Joi from '@hapi/joi';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const clearForm = () => {
        setConfirmPassword('');
        setUsername('');
       
        setEmail('');
        setPassword('');
        setError('');
    };

    const signUpSchema = Joi.object({
        username: Joi.string().min(3).max(30).required().label('Username'),

        email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
        password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$')).required().label('Password'),
        
    });

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setShowAlert(true);
            return;
        }

        const formData = {
            username,
         
            email,
            password,
        };

        const { error: validationError } = signUpSchema.validate(formData, { abortEarly: false });

        if (validationError) {
            const errorMessage = validationError.details.map(err => {
                if (err.path[0] === 'password') {
                    return 'Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be at least 14 characters long.';
                } else {
                    return err.message;
                }
            }).join('. ');
            setError(errorMessage);
            setShowAlert(true);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5270/api/auth/register', formData);
            console.log('Sign-up successful:', response.data);
            clearForm();
            navigate('/home');
        } catch (error) {
            console.error(error.response.data);
        setError(error.response.data); 
            setShowAlert(true);
        }
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
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign Up</h3>
                        <div className="form-group mt-3">
                            <label>User Name</label>
                            <div style={{width:"110%"}}>
                            <input onChange={(e) => setUsername(e.target.value)} type="text" className="form-control mt-1" placeholder="Enter your name" />
                            </div>
                        </div>

                      
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <div style={{width:"110%"}}>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mt-1" placeholder="Enter email" />
                            </div>
                        </div>

                        <div className="form-group mt-3">
                            <label>Password</label>
                            <div style={{width:"110%"}}>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mt-1" placeholder="Enter password" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password</label>
                            <div style={{width:"110%"}}>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control mt-1" placeholder="Retype password" />
                            </div>
                        </div>
                       
                        <div className="d-grid gap-2 mt-3">
                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <button style={{ width: "65%", marginBottom: "10px", marginTop: "10px" }} onClick={handleSignUp} type="submit" className="btn btn-primary">
                                    Confirm
                                </button>
                                
                            </div>
                           
                        </div>
                      
                        {showAlert && <Alert className='' style={{display:"flex",justifyContent:"center",padding:"10px"}} variant='danger'>{error}</Alert>}
                    </div>
                </form>
            </div>
        </>
    );
};

export default SignUp;
