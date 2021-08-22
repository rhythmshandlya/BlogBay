import React, {useState, useEffect} from 'react'
import './stylesheets/EasyCaed.css'
import api from './../../Util/api'


const EasyCard = (props) => {
    const [content, setcontent] = useState(props.upvotes)
    async function ClickHandler(event){
       try{
           console.log("CHALLA")
        var loginUser=await api.get('/user/isLoggedIn',{ withCredentials: true });
        console.log(loginUser);
        let blogId=event.target.getAttribute('id');      
        console.log(blogId);
        if(loginUser){
        var blog=await api.patch('blogs/upvote/'+blogId);
        console.log(blog);
         setcontent(blog.data.upvotes);
        }    
       }
       catch(err){
           console.log(err);
          alert("fsdfsdf"+err.response.data.message);
       }
        
     }
   
    const [state,setState]=useState(false);
    return (
        <div zxc="help">
        <div className="blog-filter" style={state?{display:"flex"}:{display:"none"}} onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}></div>
        <h3 className="thumbnail-title" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)} style={state?{visibility:"visible"}:{visibility:"hidden"}}>Read More</h3>
            <div  class="card_ez" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}>
                <div class="card-header">
                    <img src={props.blogLink} alt="rover" />
                </div>
                <div class="card-body">
                    <span class="tag tag-teal">Technology</span>
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    <div class="user_ez">
                        <img src={props.bloggerPic} alt="user" />
                        <div class="user-info_ez">
                            <h5>{props.date}</h5>
                            <small>{props.interval}</small>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={ClickHandler} id={props.ID}>{content}</button>
        </div>
    );
}

export default EasyCard
