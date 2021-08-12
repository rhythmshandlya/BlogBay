import React ,{useEffect, useState} from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
import EasyCard from './../BlogCards/EasyCard.jsx'
import Navbar from './../NavbarComponents/Navbar';
// import LoginPage from './../LoginPage/LoginPage';
import Aos from 'aos';
import logo from './../../data/icon-st.svg';
import 'aos/dist/aos.css';
const LandingPage = () => {
    const [numBlogs, numBlogsSetter]=useState(Math.floor(window.innerWidth/300-1))
    function check(){
        numBlogsSetter(Math.floor(window.innerWidth/300)-1);
    }
    function renderer(amount){
        var EasyCardRenderer=[];
        EasyCardRenderer.push(<EasyCard></EasyCard>);
        for(let i=0;i<amount-1;i++){
            EasyCardRenderer.push(<EasyCard></EasyCard>);
        }
        return EasyCardRenderer;
    }
    // useEffect(()=>{
    //     renderer(numBlogs)
    // },[numBlogs]);
    window.addEventListener("resize",check);
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
            <div className="sample-blogs" style={{gridTemplateColumns:"repeat("+numBlogs+",320px)"}}>
                {renderer(numBlogs)}
            </div>
        )
    }
    return (
        <>
        
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
            <CatName name="About Us"/>
        <div className="about-us"> 
            <img src={logo} alt="us" height='50%' width='30%'/>
            <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id dictum arcu, sit amet vestibulum mi. Ut vestibulum non augue eget condimentum. Ut vel molestie erat, lobortis lobortis tellus. Phasellus non diam mattis, suscipit lacus vel, venenatis metus. Nullam sit amet placerat nunc. Duis sit amet bibendum felis, nec posuere erat. Maecenas consequat efficitur sodales. Donec rutrum pulvinar tortor in scelerisque. Donec molestie blandit massa et porta. In facilisis sodales tempor. Maecenas vel sodales sapien. Aliquam sed ex non tortor viverra dignissim. In interdum congue justo, nec iaculis tortor auctor id. Maecenas ut quam venenatis, iaculis orci eu, hendrerit turpis. Morbi eget erat libero.

Etiam euismod at lacus sed aliquet. Vivamus tincidunt nulla a augue consequat, vitae eleifend ipsum euismod. Maecenas magna risus, porta vitae metus ultrices, convallis efficitur felis. Sed a vulputate diam. Morbi convallis ac est at venenatis. Sed quis eros auctor mauris pulvinar posuere eu ac ligula. Nunc vitae efficitur leo. Donec ipsum orci, feugiat ac lacus sit amet, finibus congue ex. Aliquam posuere elit ut viverra ultrices. Suspendisse felis orci, condimentum vitae elit eu, ultrices cursus orci. Nulla aliquet ligula est, ut tempus sem dictum quis. Nam vel tincidunt ex. Mauris ut ante dapibus, molestie elit ac, pretium tortor. Vivamus tempus imperdiet leo, at rutrum risus sollicitudin vel. Donec placerat nulla magna, sed accumsan nibh accumsan eu.

Suspendisse ut posuere arcu. Maecenas pellentesque, leo id aliquet euismod, justo mi hendrerit lectus, at iaculis dolor ipsum at massa. Duis congue turpis id sapien tincidunt, non tincidunt ipsum sagittis. Donec id porttitor elit. Donec interdum risus vitae fermentum faucibus. Aliquam erat volutpat. Integer vestibulum ipsum at porttitor iaculis. Maecenas maximus feugiat turpis, aliquet vulputate quam maximus non. Phasellus laoreet erat at odio aliquam semper.</p></div>
         </div>
         <div className="footer">
             <h1>FOOTER</h1>
         </div>
        </div>
        </>
    )
}

export default LandingPage;
