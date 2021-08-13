import React ,{useEffect, useState} from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
import EasyCard from './../BlogCards/EasyCard.jsx'
import Aos from 'aos';
import logo from './../../data/icon-no-bg.png';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
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
                <CatName name="Recommended Blogs"></CatName>
                <CatBlogs></CatBlogs>
                <CatName name="Travel Blogs"></CatName>
                <CatBlogs></CatBlogs>
                <CatName name="About Us" />
                <div className="about-us">
                <iframe height="300px" src="https://www.youtube.com/embed/d95PPykB2vE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Etiam euismod at lacus sed aliquet. Vivamus tincidunt nulla a augue consequat, vitae eleifend ipsum euismod. Maecenas magna risus, porta vitae metus ultrices, convallis efficitur felis. Sed a vulputate diam. Morbi convallis ac est at venenatis. Sed quis eros auctor mauris pulvinar posuere eu ac ligula. Nunc vitae efficitur leo. Donec ipsum orci, feugiat ac lacus sit amet, finibus congue ex. Aliquam posuere elit ut viverra ultrices. Suspendisse felis orci, condimentum vitae elit eu, ultrices cursus orci. Nulla aliquet ligula est, ut tempus sem dictum quis. Nam vel tincidunt ex. Mauris ut ante dapibus, molestie elit ac, pretium tortor. Vivamus tempus imperdiet leo, at rutrum risus sollicitudin vel. Donec placerat nulla magna, sed accumsan nibh accumsan eu.</p>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default LandingPage;
