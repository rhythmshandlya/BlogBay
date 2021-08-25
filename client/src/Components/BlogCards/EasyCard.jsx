import React, {useState, useEffect} from 'react'
import './stylesheets/EasyCaed.css'
import api from './../../Util/api'
import UpvoteBtns from './UpandDownVoteBtns';
const EasyCard = (props) => {
    // const [isUpvoted, setisUpvoted] = useState(false);
    // function checkker(event){
    //     let blogId=event.target.getAttribute('id');
    //     if(isUpvoted){
    //         downVoteHandler(blogId);
    //         setisUpvoted(!isUpvoted);
    //     }
    //     else{
    //         upVoteHandler(blogId);
    //         setisUpvoted(!isUpvoted);
    //     }
    // }
    // const [isLoggedIn, setisLoggedIn] = useState();
    // useEffect(() => {
    //     async function find() {
    //         try {
    //             let res = await api.get('user/isLoggedIn', { withCredentials: true });
    //             if (res.data.user) {
    //                 setisLoggedIn(true);
    //             }
    //         } catch (err) {
    //             setisLoggedIn(false);
    //         }
    //     }
    //     find()
    // },[]);
    // const [content, setcontent] = useState(props.upvotes)
    // async function upVoteHandler(blogId){
              
    //     console.log(blogId);
    //     if(true){
    //     var blog=await api.patch('blogs/upvote/'+blogId);
    //     console.log(blog);
    //      setcontent(blog.data.upvotes+"like");
    //     }       
    //  }
    //  async function downVoteHandler(blogId){      
    //     console.log(blogId);
    //     if(true){
    //     var blog=await api.patch('blogs/downvote/'+blogId);
    //     console.log(blog);
    //      setcontent(blog.data.upvotes+"like");
    //     }       
    //  }
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
                            <small>{props.interval}</small>
                            <UpvoteBtns id={props.ID} upvotes={props.upvotes}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EasyCard
