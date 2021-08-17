import api from './../../Util/api'
import { useEffect, useState ,useRef} from 'react';
import './Stylesheets/profile.css';
import Navbar from './../NavbarComponents/Navbar';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAddressBook, faAlignLeft } from '@fortawesome/free-solid-svg-icons';


const Profile = () => {
    let history = useHistory();
    const [user, setUser] = useState({});
    useEffect(() => {
        async function fetchMyAPI() {
           try {
               let res = await api.get('user/isLoggedIn', { withCredentials: true });
               if (res.data.user) {
                   setUser(res.data.user);
               }
           }catch (err) {
                history.push('/login');
           }
       }
       fetchMyAPI();
    });

    const About = ({ user }) => {
        if (user)
            return (
                <div className="about_wrapper">
                    <p className="name_about">{`${user.name}`}</p>
                    <p className="email_about">{`${user.email}`}</p>
                    <p><FontAwesomeIcon icon={faPen} />{`  ${user.niche}`}</p>
                    <p><FontAwesomeIcon icon={faAlignLeft} />{` ${user.job}`}</p>
                    <p className="description_about"><FontAwesomeIcon icon={faAddressBook} />{` ${user.description}`}</p>
                </div>
            );
        else
            return (<></>);
}
    const Blogs = (props) => {
        return (
            <>
            </>
        );
    }
    const Stats = (props) => {
        return (
            <>
            </>
        );
    }

    const [state, stateSetter] = useState(<About />);

  
    const clickHandler = (e) => {
        const nav = document.querySelectorAll('.info_links');
        switch (e.target.textContent) {
            case 'About':
                nav[1].classList.remove('un-p');
                nav[2].classList.remove('un-p');
                stateSetter(<About user={user}/>);
                break;
            case 'Stats':
                nav[0].classList.remove('un-p');
                nav[1].classList.remove('un-p');
                stateSetter(<Stats user={user}/>);
                break;
            case 'Blogs':
                nav[0].classList.remove('un-p');
                nav[2].classList.remove('un-p');
                stateSetter(<Blogs user={user}/>);
                break;
            default:
             console.log('error')
        }
        e.target.classList.add('un-p');
    }

    return (
        <>
            <Navbar />
            <div>
                <div className="CoverImage FlexEmbed FlexEmbed--2by1" style={{ backgroundImage: `url(${user.cover}})` }}></div>
                <img className="avatar" src={`${user.dp}`} alt="Girl in a jacket" />
                <div className="info">
                    <p className="info_links link-grow un un-p" onClick={clickHandler}>About</p>
                    <p className="info_links un" onClick={clickHandler}>Blogs</p>
                    <p className="info_links un" onClick={clickHandler}>Stats</p>
                </div>
                {state}
            </div>
        </>
    );
}

export default Profile
