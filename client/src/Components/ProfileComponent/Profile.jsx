import api from './../../Util/api'
import { useEffect, useState} from 'react';
import './Stylesheets/profile.css';
import Navbar from './../NavbarComponents/Navbar';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faAddressBook, faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import CardExplore from '../BlogCards/CardExplore';
import ButtonRed from './../NavbarComponents/Login';

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
        return (
            <h3>Loading...</h3>
        );
}

const Blogs = (props) => {
  console.log(props);
  return (
    <>
      <div className='go-to-editor'>
        <h1>CONTINUE WHERE YOU LEFT?</h1>
        <ButtonRed message='Open Editor' link='/editor'/>
      </div>
      <div className='explore-card-parent'>
        {
          props.blogs.map((blog) => { return (<CardExplore title={blog.title} content={blog.summary} image={blog.blogImages[0]}/>) })
        }
      </div>
    </>
  );
}

const Stats = (props) => {
    return (
        <>
        </>
    );
}

const Profile = () => {
  const history = useHistory();
  const [user, setUser] = useState({}); 
  const [state, stateSetter] = useState('About'); 
  const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      async function fetchMyAPI() {
        try {
          let res = await api.get('user/isLoggedIn', { withCredentials: true });
          let res_2 = await api.get(`blogs?authorID=${res.data.user._id}`, { withCredentials: true });
          setBlogs(res_2.data.data.allBlogs);
          setUser(res.data.user);
        } catch(err) {
          history.push('/login');
        }
      }
      fetchMyAPI();
    }, []);
  
    const clickHandler = (e) => {
      e.preventDefault()
      const nav = document.querySelectorAll('.info_links');
      switch (e.target.textContent) {
        case 'About':
          nav[1].classList.remove('un-p');
          nav[2].classList.remove('un-p');
          stateSetter('About');
          break;
        case 'Stats':
          nav[0].classList.remove('un-p');
          nav[1].classList.remove('un-p');
          stateSetter('Stats'); 
          break;
        case 'Blogs':
          nav[0].classList.remove('un-p');
          nav[2].classList.remove('un-p');
          stateSetter('Blogs'); 
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
          <div
            className="CoverImage FlexEmbed FlexEmbed--2by1"
            style={{ backgroundImage: `url(${user.cover}})` }}>
          </div>
          <img className="avatar" src={`${user.dp}`} alt="Girl in a jacket" />
          <div className="info">
            <p className="info_links un un-p" onClick={clickHandler}>About</p>
            <p className="info_links un" onClick={clickHandler}>Blogs</p>
            <p className="info_links un" onClick={clickHandler}>Stats</p>
          </div>
          {state === 'About' && <About user={user} />}
          {state === 'Blogs' && <Blogs blogs={blogs} currentBlog={user.currentBlog} />}
          {state === 'Stats' && <Stats/>}
        </div>
      </>
    );
}
  
export default Profile
