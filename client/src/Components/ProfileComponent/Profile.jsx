import React from 'react'
import './Stylesheets/profile.css';

const about = (<><h1>About</h1></>);
const blog = (<><h1>Blog</h1></>);
const contact = (<><h1>Contact</h1></>);

const backgroundImg = 'http://placeimg.com/1000/1000/nature';
const displayPicture = 'https://picsum.photos/500/500';

const Profile = () => {
    const [state, stateSetter] = React.useState(blog);
    const clickHandler = (e) => {
        const nav = document.querySelectorAll('.info_links');
        switch (e.target.textContent) {
            case 'About':
                console.log(nav[1],nav[2])
                nav[1].classList.remove('un-p');
                nav[2].classList.remove('un-p');
                stateSetter(about);
                break;
            case 'Contact':
                nav[0].classList.remove('un-p');
                nav[1].classList.remove('un-p');
                stateSetter(contact);
                break;
            case 'Blogs':
                nav[0].classList.remove('un-p');
                nav[2].classList.remove('un-p');
                stateSetter(blog);
                break;
            default:
             console.log('error')
        }
        e.target.classList.add('un-p');
    }

    return (
        <div>
            <div className="CoverImage FlexEmbed FlexEmbed--2by1" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
            <div className="avatar" style={{ backgroundImage: `url(${displayPicture})` }}></div>
            <div className="info">
                <p className="info_links link-grow un" onClick={clickHandler}>About</p>
                <p className="info_links un un-p" onClick={clickHandler}>Blogs</p>
                <p className="info_links un" onClick={clickHandler}>Contact</p>
            </div>
            {state}
        </div>
    )
}

export default Profile
