import React from 'react'
import Hamburger from './Hamburger'
import LoginButton from './Login';
import Search from './Search';

import icon from './../../data/icon-st.svg'
import './Stylesheets/Navbar_m.css'
import './Stylesheets/Navbar.css'

const Navbar_m = () => {
    return (
        <>
            <div className="container">
            <Hamburger/>
            <img className="icon_m" src={icon} alt="_NA"/>
            </div>
            <div className="dropdown">
                <a className="nav-link_m" href="/home">Home</a>
                <a className="nav-link_m" href="/blog">Blog</a>
                <a className="nav-link_m" href="/tutorial">Tutorial</a>
                <Search />
                <LoginButton />
            </div>
        </>
    )
}
export default Navbar_m;
