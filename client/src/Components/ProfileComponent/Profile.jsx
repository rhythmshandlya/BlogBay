import React from 'react'
import './Stylesheets/profile.css';
const Profile = () => {
    const [state, stateSetter]=React.useState(0);
    return (
        <div>
            <div className="cover">
                <div className="avatar" ></div>
            </div>
            <div className="info">
                <p className="info_links" onClick={()=>stateSetter(1)}>About</p>
                <p className="info_links" style={{paddingLeft:"1em"}} onClick={()=>stateSetter(2)}>Blogs</p>
                <p className="info_links" onClick={()=>stateSetter(3)}>Contact</p>
            </div>
            <div className="addBlog">+</div>
            {/* <div style={{height:"1000px", backgroundColor:"white"}}></div> */}
            {state===1 && <div className="about">
                <table style={{width:"100%", marginTop:"5%"}}> 
                    <tr>             <td>Hello</td>
                    </tr>
                </table>
            </div>}
            {state===2 && <h1>BLOGS</h1>}
           
            {state===3 && <h1>PERSONAL INFO</h1>}
        </div>
    )
}

export default Profile
