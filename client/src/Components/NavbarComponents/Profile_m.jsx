import React from 'react'
import './Stylesheets/profile.css';
const Profile_m = () => {
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
    </div>
     );
}
 
export default Profile_m;