import React from 'react'
import './stylesheets/upvote.css'
import api from './../../Util/api'
import { useEffect, useState } from 'react'
const UpandDownVoteBtns = (props) => {
///////////////LOGIN CHECKKER//////////////////
    const [isLoggedIn, setisLoggedIn] = useState();
    var UserId;
    useEffect(() => {
        async function find() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    setisLoggedIn(true);
                    UserId=(res.data.user._id);
                }
            } catch (err) {
                setisLoggedIn(false);
            }
        }
        find()
    },[]);
///////////////LOGIN CHECKKER//////////////////
const [isUpvoted, setisUpvoted] = useState(false);
//////////////manager/////////////////////////
function checkker(event){
    let blogId=event.target.getAttribute('id');
    if(isUpvoted){
        downVoteHandler(blogId);
        setisUpvoted(!isUpvoted);
    }
    else{
        UpVoteHandler(blogId);
        setisUpvoted(!isUpvoted);
    }
}
//////////////manager/////////////////////////
const [content, setcontent] = useState(props.upvotes)
//////////////upvotehandler/////////////////////////
async function UpVoteHandler(blogId){
              
    console.log("UP"+blogId);
    if(true){
    var blog=await api.patch('blogs/upvote/'+blogId);
     setcontent(blog.data.upvotes);
    }       
 }
//////////////upvotehandler/////////////////////////
//////////////downvotehandler/////////////////////////
async function downVoteHandler(blogId){      
    console.log("down"+blogId);
    if(true){
    var blog=await api.patch('blogs/downvote/'+blogId);
    console.log(blog);
     setcontent(blog.data.upvotes);
    }       
 }
//////////////downvotehandler/////////////////////////

return (
        <div>
            <div class="widget top-left">
  <div class="upvote thumbs">
    <div style={{marginRight:'25px'}}>
      <i class="thumbs-icon thumbs-icon-up"  onClick={isLoggedIn?checkker:()=>{alert("login")}} id={props.id}></i>
      <p>{content}</p>
    </div>
  </div>
  <div class="downvote thumbs">
    <div>
      <i class="thumbs-icon thumbs-icon-down" onClick={isLoggedIn?checkker:()=>{alert("login")}} id={props.id}></i>
      <p>{content}</p>
    </div>
  </div>
</div>


        </div>
    )
}

export default UpandDownVoteBtns
