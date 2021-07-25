import './../Stylesheets/Navbar.css'
import React from 'react'

import Profile from './Profile'
import Search from './Search';
import LoginButton from './../Components/Login';

import logo from './../data/icon-st.png';
import Hamburger from './Hamburger';


const Navbar = () => {
    return (
        <div className="container">
            <img className="icon" src={logo} alt="_N.F"/>
            <div className="nav-links">
                <a className="nav-link" href="www.google.com">Home</a>
                <a className="nav-link" href="www.google.com">Blog</a>
                <a className="nav-link" href="www.google.com">Tutorial</a>
            </div>
            <div className="inner-container">
                <LoginButton />
                <Search />
            </div>
            
        </div>
    )
}
export default Navbar
