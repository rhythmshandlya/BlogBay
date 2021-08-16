import React ,{useEffect, useState} from 'react'
import './Stylesheets/LandingPage.css'
import ButtonSignup from './ButtonSignup'
import EasyCard from './../BlogCards/EasyCard.jsx'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';
import api from './../.././Util/api.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


const SignupHeading = () => {
    return (
        <div className='landing'>
        <h1 className="h1-landing" data-aos="fade-up">Write blogs with us</h1>
        <ButtonSignup />
        </div>
    );
}

const LandingPage = () => {
        var a="hello";
        const [content, setContent]=useState();
        var cont
        async function getmeBlogs(){
            try{
                cont= await api.get('http://localhost:8000/api/v1/blogs');
                a=cont.data.data.allBlogs[4].content; 
                console.log(a);
                setContent(a);
            }
            catch(err){}
        }
        getmeBlogs();
        useEffect(() => {

        },)
    const [signupCard, setSignupCard] = useState(null);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    console.log(res.data);
                }
            } catch (err) {
                console.log(err.response.data.message || err.response || err);
                setSignupCard(<SignupHeading />);
            }
        }
        fetchMyAPI()
    },[]);

    const [numBlogs, numBlogsSetter]=useState(Math.floor(window.innerWidth/300-1))
    function check(){
        numBlogsSetter(Math.floor(window.innerWidth/300)-1);
    }
    function renderer(amount){
        var EasyCardRenderer=[];
        EasyCardRenderer.push(<EasyCard content={content}></EasyCard>);
        for(let i=0;i<amount-1;i++){
            EasyCardRenderer.push(<EasyCard></EasyCard>);
        }
        return EasyCardRenderer;
    }

    window.addEventListener("resize",check);
    useEffect(() => {
      Aos.init({duration:2000});
    }, []);
    function CatName(props){
        return(
            <h1 className="cat-name">{props.name} <a style={{paddingBottom:"4px", color:"black",position:"relative",bottom:"6px"}} href={`${props.name}`}> <FontAwesomeIcon icon={faArrowRight} size="lg"/> </a> </h1>
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
                {signupCard}
                <CatName name="TOP BLOGS"></CatName>
                <CatBlogs />
                <CatName name="Recommended Blogs"></CatName>
                <CatBlogs />
                <CatName name="Travel Blogs"></CatName>
                <CatBlogs />
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
