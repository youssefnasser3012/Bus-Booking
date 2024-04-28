import React, { useState } from 'react';
import   './Signin.css';
import './navbar.css';
import Navbar from './navbar'
import axios from 'axios';

import { Link } from 'react-router-dom';
const Signin=()=>{
    
    const [email,setemail]=useState('');
    const [password,setPassword]=useState('');
   const handelSigninemail =(e)=>{
setemail(e.target.value);

   };
    
   const handelSigninPassword =(e)=>{
setPassword(e.target.value);

   };

   const handleAdd = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
        // Make a POST request to the backend API endpoint
        const response = await axios.post('http://localhost:5270/api/auth/"login"', {
           
            Email: email,
           
            Password: password
        });

        // Handle the response here if needed
        console.log('login successful:', response.data);

        // Optionally, you can redirect the user to another page
        // after successful sign-up
        // history.push('/login');
    } catch (error) {
        console.error('Error :', error.response.data);
    }
};


    return(
        <>
    <Navbar />
    
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
      <div style={{display:"flex",justifyContent:"center" }}>
        <h3 className="Auth-form-title">Sign In</h3>
        </div>
        <div style={{display:"flex",justifyContent:"center" }}>
        <Link to="/signup" style={{textDecoration:'none',textAlign:'center'}}><p>Not register yet? <a style={{textDecoration:'none'}} href="/signup">Sign Up </a></p></Link>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <div style={{width:"110%"}}>
          <input onChange={ handelSigninemail} value={email}  type="email" className="form-control mt-1" placeholder="Enter email"/>
          </div>
        </div>
        <div className="form-group mt-3">
         <label>Password</label>
         <div style={{width:"110%"}}>
          <input  value={password} onChange={handelSigninPassword} type="password" className="form-control mt-1" placeholder="Enter password"/>
          </div>
        </div>
        <div className="d-grid gap-2 mt-3">
        <div style={{display:"flex",justifyContent:"center" }} >
          <button onClick={handleAdd} type="submit" style={{width:"65%",marginTop:"12px"}} className="btn btn-primary">
            Submit
          </button>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center" }}>
        <p className="forgot-password text-right mt-2">
          <a href="/#" style={{textDecoration:'none'}}> Forgot password?</a>
        </p>
        </div>
      </div>
    </form>
  </div>
     </>
)

    
    
    
    
    };
    export default Signin;