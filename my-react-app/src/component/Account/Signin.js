import React, { useState } from 'react';
import   './Signin.css';
import './navbar.css';
import Navbar from './navbar'

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

   const handleAdd = () => {
    // Construct the object with the form data
    const SigninData = {
    'password':password,
    'email':email,
    
    };
    // Store the form data in local storage
    localStorage.setItem('signin', JSON.stringify(SigninData));

    
  
};


    return(
        <>
    <Navbar />
    
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
      
        <h3 className="Auth-form-title">Sign In</h3>
        <Link to="/signup" style={{textDecoration:'none',textAlign:'center'}}><p>Not register yet? <a style={{textDecoration:'none'}} href="/signup">Sign Up </a></p></Link>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input onChange={ handelSigninemail}
          value={email}
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
          value={password}
          onChange={handelSigninPassword}
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button onClick={handleAdd} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          <a href="/#" style={{textDecoration:'none'}}> Forgot password?</a>
        </p>
      </div>
    </form>
  </div>
     </>
)

    
    
    
    
    };
    export default Signin;