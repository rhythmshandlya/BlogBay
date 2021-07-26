import React from 'react'
import './Stylesheets/ham.css';

const dropdownToggler = () => {
    document.querySelector('.dropdown').classList.toggle('drop');
}
const Hamburger = () => {
    return (
        <div className="demo" onClick={dropdownToggler}>
        <div className="menu-icon">
            <input className="menu-icon__cheeckbox" type="checkbox" />
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
    )
}

export default Hamburger
