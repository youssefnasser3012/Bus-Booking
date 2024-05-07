import React from 'react';
import logo from './error-message.jpg'; 
import './Error.css'; // Import the CSS file for styling

const Error = () => {
    return (
        <div className="error-container">
            <img src={logo} alt="Error" className="error-image" />
            <p className="error-text">Oops! Something went wrong.</p>
        </div>
    );
};

export default Error;
