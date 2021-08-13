import React from 'react'
import './Footer.css'
import icon from './../../data/icon-st.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faMailBulk} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
        return (
                <footer className="footer">
                        <div className="footer-col-1">
                                <img className='footer-icon' src={icon} alt="NA_" />
                                <p>Thankyou for being a part of blogbay, you are very precious to us.This was our first ever university project and we are very proud to bring it you.</p>
                        </div>
                        <div className='footer-col-2'>
                                <h3>Contact Us</h3>
                                <p> <FontAwesomeIcon icon={faHome} /> Bangalore, India</p>
                                <p> <FontAwesomeIcon icon={faMailBulk} /> armaanbgp@gmail.com</p>
                                <p> <FontAwesomeIcon icon={faMailBulk} /> eeshanmattey@gmail.com</p>
                        </div>
                        <div className='footer-col-3'>
                                <h3>References</h3>
                                <p></p>
                        </div>
                        
                </footer>
        );
}

export default Footer
