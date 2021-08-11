import React ,{useEffect} from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
import EasyCard from './../BlogCards/EasyCard.jsx'
import Navbar from './../NavbarComponents/Navbar';
import Aos from 'aos';
import logo from './../../data/icon-st.svg';
import 'aos/dist/aos.css';
const LandingPage = () => {
    useEffect(() => {
      Aos.init({duration:2000});
    }, []);
    function CatName(props){
        return(
            <h1 className="cat-name">{props.name}</h1>
        )
    }
    function CatBlogs(){
        return(
            <div className="sample-blogs">
            <EasyCard></EasyCard>
            <EasyCard></EasyCard>
            <EasyCard></EasyCard>
            <EasyCard></EasyCard>
            </div>
        )
    }
    return (
        <>
        <Navbar />
        <div className="landing-page">
            <div className='landing'>
                <h1 className="h1-landing" data-aos="fade-up">Write blogs with us</h1>
                <ButtonSignup />
            </div>
          <CatName name="TOP BLOGS"></CatName>
            <CatBlogs></CatBlogs>
            <CatName name="Reccomended Blogs"></CatName>
            <CatBlogs></CatBlogs>
            <CatName name="Travel Blogs"></CatName>
            <CatBlogs></CatBlogs>
        <div className="about-us">
            <CatName name="About Us"/>
            <img src={logo} alt="us" height='500px' width='400px'/>
            <pre>With it installed in the code editor yo
            u are using, you can type
             “lorem” and then tab and it will </pre>
         </div>
         <div className="footer">
             <h1>FOOTER</h1>
         </div>
        </div>
        </>
    )
}

export default LandingPage;
