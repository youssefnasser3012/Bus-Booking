import React ,{useState}from 'react';
import   './Signin.css';
import './navbar.css';
import Navbar from './navbar'
const SignUp=()=>{
    const [email,setemail]=useState('')
    const [username,setusername]=useState('')
    const [phonenumber,setphonenumber]=useState('')
    const [password,setPassword]=useState('')
   
   

    const handelUserName =(e)=>{
 setusername(e.target.value);
 
    };
    const handelPhoneNumber =(e)=>{
 setphonenumber(e.target.value);
 
    };
   
    const handelSignUpemail =(e)=>{
 setemail(e.target.value);
 
    };
    
    const handelSignUpPassword =(e)=>{
 setPassword(e.target.value);
 
    };
   
    const handleConfirm = () => {
        // Construct the object with the form data
        const SignupData = {
        'passwordsignup':password,
        'emailsignup':email,
        'phonenumbersignup':phonenumber,
        'usernamesignup':username,
      
       
           
        };
        // Store the form data in local storage
        localStorage.setItem('signup', JSON.stringify(SignupData));
    
        
      
    };
    return(
        
        <>
    <Navbar />
    <div className="Auth-form-container">
    <form className="Auth-form">
   
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        
        <div className="form-group mt-3">
          <label>User Name</label>
          <input
          onChange={handelUserName}
            type="text"
            className="form-control mt-1"
            placeholder="Enter your name"/>
        </div>
        <div className="form-group mt-3">
          <label>Phone Number</label>
          <input
          onChange={handelPhoneNumber}
            type="number"
            className="form-control mt-1"
            placeholder="Enter number"/>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
          onChange={handelSignUpemail}
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"/>
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
          onChange={handelSignUpPassword}
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
          <button  onClick={handleConfirm} type="submit" className="btn btn-primary">
            Confirm
          </button>
        </div>

      </div>
    </form>
  </div>
    </>
)

    
    
    
    
    };
    export default SignUp;