import { useEffect,useState } from 'react'
// import LoginButton from './Login';
import Search from './Search';
import logo from './../../data/icon-st.svg';
import Btn2 from './Btn_2';
import './Stylesheets/Navbar.css'
import api from './../../Util/api'
import { Link } from 'react-router-dom';

const Navbar_c = () => {

    const ProfilePicture = (props) => {
        return (
            <Link to="/profile"><img className="navebar-profile" src={props.dpUrl} alt="Girl in a jacket" width="50px" height="50px" /></Link>
        );
    };
    const [loginOrProfile, setLoginOrProfile] = useState(null);
    
    useEffect(() => {
         async function fetchMyAPI() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    setLoginOrProfile(<ProfilePicture dpUrl={res.data.user.dp} />);
                }
            } catch (err) {
                setLoginOrProfile(<Btn2 />);
            }
        }
        fetchMyAPI();
    },[]);

    return (
        <div className="container">
        <img className="icon" src={logo} alt="_N.F"/>
        <div className="nav-links">
            <a className="nav-link" href="/home">Home</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/tutorial">Tutorial</a>
        </div>
        <div className="inner-container">
            {loginOrProfile}
            <Search />
        </div>
        </div>
    )
}

export default Navbar_c;
