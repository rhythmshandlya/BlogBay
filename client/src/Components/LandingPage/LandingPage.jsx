import React from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className='landing'>
                <h1 className="h1-landing">Write blogs with us</h1>
                <ButtonSignup />
            </div>
            
        </div>
    )
}

export default LandingPage;
