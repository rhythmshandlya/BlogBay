import React from 'react'
import LoginButton from './Login';
import Search from './Search';
import logo from './../../data/icon-st.svg';
import Btn2 from './Btn_2';
import './Stylesheets/Navbar.css'

const Navbar_c = () => {
    return (
        <div className="container" >
        <img className="icon" src={logo} alt="_N.F"/>
        <div className="nav-links">
            <a className="nav-link" href="/home">Home</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/tutorial">Tutorial</a>
        </div>
        <div className="inner-container">
            <Btn2 />
            <Search />
        </div>
        </div>
    )
}

export default Navbar_c
