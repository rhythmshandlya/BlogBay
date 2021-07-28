import React from 'react'
import './Stylesheets/profile.css';
const Profile = () => {
    
    return (
        <div>
            <div className="cover">
                <div className="avatar" ></div>
            </div>
            <div className="info">
                <p className="info_links" >About</p>
                <p className="info_links" style={{paddingLeft:"3em"}}>Blogs</p>
                <p className="info_links">Personal Info</p>
            </div>
            <div className="addBlog">+</div>
            <div style={{height:"1000px", backgroundColor:"white"}}></div>
        </div>
    )
}

export default Profile
