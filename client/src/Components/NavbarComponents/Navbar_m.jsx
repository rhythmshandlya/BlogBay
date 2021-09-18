import React from 'react'
import Hamburger from './Hamburger'
import Search from './Search';
import { useEffect,useState } from 'react'
import icon from './../../data/icon-st.svg'
import api from './../../Util/api'
import './Stylesheets/Navbar_m.css'
import './Stylesheets/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import Btn2 from './Btn_2';
import { Link } from 'react-router-dom';

const css = {
    margin:"5px"
}
const Navbar_m = () => {
    
    const ProfilePicture = (props) => {
        return (
            <div className='profileOrSettings'>
                <Link to='/profile'> <img style={css} className="navebar-profile_m" src={props.dpUrl} alt="DP" width="40px" height="40px" /></Link>
                <Link to='/settings'> <FontAwesomeIcon icon={faCog} size="2x" color="white" /></Link>
            </div>
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
