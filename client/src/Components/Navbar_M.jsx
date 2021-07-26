import React from 'react'
import Hamburger from './Hamburger'
import icon from './../data/icon-st.svg'
import './../Stylesheets/Navbar_M.css'

const Navbar_M = () => {
    return (
        <>
            <div className="container">
            <Hamburger />
            <img className="icon_m" src={icon} alt="_NA"/>
            </div>
            <div className="dropdown">
            
            </div>
        </>
    )
}

export default Navbar_M
