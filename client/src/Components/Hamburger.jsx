import React from 'react'
import './../Stylesheets/ham.css';

const toggler = ()=>{
    
}

const Hamburger = () => {
    return (
        <label for="check" onClick={toggler}>
            <input type="checkbox" id="check"/> 
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default Hamburger
