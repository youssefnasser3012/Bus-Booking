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

   

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setShowAlert(true);
            return;
        }


        const signupdata = {
            Username: username,
            Email: email,
            Password: password,
        };

//         const signUpSchema = Joi.object({
//     username: Joi.string().min(3).max(30).required().label('Username'),
//     email: Joi.string().email({ tlds: false }).required().label('Email'),
//     password: Joi.string()
//         .min(8)
//         .required()
//         .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$'))
//         .label('Password')
//         .messages({
//             'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.',
//         }),
// });

// const { error: validationError } = signUpSchema.validate(signupdata, { abortEarly: false });

// if (validationError) {
//     const errorMessage = validationError.details.map(err => err.message).join('. ');
//     setError(errorMessage);
//     setShowAlert(true);
//     return;
// }

if (password !== confirmPassword) {
    setError('Passwords do not match');
    setShowAlert(true);
    return;
}

        
    
       
        try {
            // Make the axios post request with signupdata
            const response = await axios.post('http://localhost:5270/api/auth/register', signupdata);
            console.log('Sign-up successful:', response.data);
            clearForm();
            navigate('/signin');
        } catch (err) {
             console.error(err.response.data);
             setError(err.response.data);
            setShowAlert(true);
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
                                <button style={{ width: "65%", marginBottom: "10px", marginTop: "10px" }}  type="submit" className="btn btn-primary">
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
