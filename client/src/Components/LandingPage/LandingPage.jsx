import React ,{useEffect} from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
import EasyCard from './../BlogCards/EasyCard.jsx'
import Navbar from './../NavbarComponents/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
const LandingPage = () => {
    useEffect(() => {
      Aos.init({duration:2000});
    }, []);
    return (
        <>
        <Navbar />
        <div className="landing-page">
            <div className='landing'>
                <h1 className="h1-landing" data-aos="fade-down">Write blogs with us</h1>
                <ButtonSignup />
            </div>
          
            <div className="sample-blogs">
                <EasyCard></EasyCard>
                <EasyCard></EasyCard>
                <EasyCard></EasyCard>
            </div>   
        </div>
        </>
    )
}

export default LandingPage;
