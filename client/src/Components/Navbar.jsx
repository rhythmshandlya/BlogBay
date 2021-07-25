import './../Stylesheets/Navbar.css'
import React, { Fragment } from 'react'
import Profile from './Profile'
import Search from './Search';
import LoginButton from './../Components/Login';

import logo from './../data/icon-st.svg';
import Hamburger from './Hamburger';
import MobNav from './Navbar_m';
const Navbar = () => {
    var init=()=>{
        if(window.innerWidth<800){
            return true
        }
        else{
            return false;
        }
    }
    const [menu, menuSetter]=React.useState(init);
    // console.log("SET is "+set);
    function check(){
        // console.log("triggered");
        if(window.innerWidth<800){
            menuSetter(true);
            // return true
        }
        else{
            menuSetter(false);
            // return false;
        }
    }
   
    window.addEventListener("resize",check);
    return (
        <>
        {menu? <MobNav></MobNav> : <div className="container" style={{display: menu ? "none" : "flex"}}>
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
            
        </div>}
        
        </>
        
    )
}
export default Navbar
