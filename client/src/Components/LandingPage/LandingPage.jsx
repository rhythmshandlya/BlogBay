import React from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
import EasyCard from './../BlogCards/EasyCard.jsx'
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className='landing'>
                <h1 className="h1-landing">Write blogs with us</h1>
                <ButtonSignup />
            </div>
            <div className="land-about-us"></div>
            <div className="sample-blogs">
                <EasyCard></EasyCard>
                <EasyCard></EasyCard>
                <EasyCard></EasyCard>
            </div>
            <div className="footer"><h1>footer</h1></div>
        </div>
    )
}

export default LandingPage;
