import { faBookOpen, faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-section">
            <Container>
        <div className="footer-container">
            <div>
            <Navbar.Brand as={Link} to="/home">
        <img
          alt=""
          src="/assets/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      <span className="logo-txt">Denti<span className="color-txt">Care</span></span>
      </Navbar.Brand>
                <p>we are providing high-quality online courses for about ten years.</p>
                <p>Follow us</p>
            </div>

            <div>
                <h3 className="main-color">Catagories</h3>
                <ul>
                    <li>- Dental support</li>
                    <li>- Periodontal Therapy.</li>
                    <li>- Teeth Whitening</li>
                    <li>- Cosmetic Dentistry</li>
                </ul>
            </div>

            <div>
                <h3 className="main-color">Contact us</h3>
                <ul>
                    <li><FontAwesomeIcon className="main-color" icon={faMapMarkedAlt}/> 250/A Oval Street, Mount View, London, United Kingdom</li>
                    <li><FontAwesomeIcon className="main-color" icon={faEnvelope}/> support@denticare.com</li>
                    <li><FontAwesomeIcon className="main-color" icon={faPhone}/> +98 12345 67890</li>
                </ul>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Footer;