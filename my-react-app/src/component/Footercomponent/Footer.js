import React from 'react';
import './Footer.css'; 
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaBusAlt } from "react-icons/fa";
const Footer = () => {
  return (
<footer className="footer bg-dark pb-5">
    <div className="container">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
        <h3>About Us</h3>
        <p>Book tikcet and travel easy..</p>
        <div><FaBusAlt size='2.4rem' /></div>
        </div>
       
        <div className="col-lg-3 col-md-3 col-sm-6">
        <h3>Links</h3>
        <ul className="list-unstyled">
        <Link to="/" style={{textDecoration:'none'}}><li><a href="/">Home</a></li></Link>
        <Link to="/tickets"  style={{textDecoration:'none'}}><li><a href="/tickets">Book Tickets</a></li></Link>
        <Link to="/contactus" style={{textDecoration:'none'}}>   <li><a href="/contactus">Contact Us</a></li></Link>
        <Link to="/traveldistination" style={{textDecoration:'none'}}>   <li><a href="/traveldistination">Travel Distination</a></li></Link>
        <Link to="/busstation" style={{textDecoration:'none'}}>   <li><a href="/busstation">Bus Station</a></li></Link>
        </ul>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6">
        <h3>Follow Us</h3>
        <ul className="list-unstyled">
            <li><a href="https://www.instagram.com/youssefnasser3_0?igsh=MXJqM29xdnBtNGZkdQ==/"><FaInstagram size='1.5rem' /> Instegram</a></li>
            <li><a href="https://www.facebook.com/YNR30?mibextid=ZbWKwL"><FaFacebook  size='1.5rem'/> FaceBook</a></li>
            <li><a href="https://github.com/youssefnasser3012/webapp2024"><FaGithub size='1.5rem'/></a> GitHub</li>
            <li><a href="tel:+20-01159372809"><FaWhatsapp size='1.5rem'/></a> WhatsApp</li>
        </ul>
        </div>
    </div>
    </div>
</footer>
  );
}

export default Footer;
