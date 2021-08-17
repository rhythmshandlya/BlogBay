import React from 'react'
import Hamburger from './Hamburger'
// import LoginButton from './Login';
import Search from './Search';
import { useEffect,useState } from 'react'
import icon from './../../data/icon-st.svg'
import api from './../../Util/api'
import './Stylesheets/Navbar_m.css'
import './Stylesheets/Navbar.css'
import Btn2 from './Btn_2';
import { Link } from 'react-router-dom';

const Navbar_m = () => {
    
    const ProfilePicture = (props) => {
        return (
            <img className="navebar-profile_m" src={props.dpUrl} alt="Girl in a jacket" width="40px" height="40px" />
        );
    };
    const [loginOrProfile, setLoginOrProfile] = useState(null);
    
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    setLoginOrProfile(<ProfilePicture dpUrl={res.data.user.dp}/>);
                    
                }
            } catch (err) {
                setLoginOrProfile(<Btn2 />);
            }
        }
        fetchMyAPI();
    }, []);
    return (
        <>
            <div className="container">
            <Hamburger/>
            <img className="icon_m" src={icon} alt="_NA"/>
            </div>
            <div className="dropdown">
                <a className="nav-link_m" href="/home">Home</a>
                <a className="nav-link_m" href="/blog">Blog</a>
                <a className="nav-link_m" href="/tutorial">Tutorial</a>
                {loginOrProfile}
                <br></br>
               <Search />
            </div>
        </>
    )
}
export default Navbar_m;
