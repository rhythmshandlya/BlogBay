import React from 'react'
import './stylesheets/upvote.css'
import api from './../../Util/api'
import { useEffect, useState } from 'react'
const UpandDownVoteBtns = (props) => {
///////////////LOGIN CHECKKER//////////////////
    const [isLoggedIn, setisLoggedIn] = useState();
    const [UserId, setUserId] = useState();
    
    useEffect(() => {
        async function find() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    setisLoggedIn(true);
                    setUserId(res.data.user._id);
                    checkIfUpvoted(props.uid);
                }
            } catch (err) {
                setisLoggedIn(false);
            }
        }
        find()
    },[]);
    const [isUpvoted, setisUpvoted] = useState();
    async function checkIfUpvoted(id){
        try{
           let user= await api.get('http://localhost:8000/api/v1/user/'+id);
            user=user.data.user.upvotedBlogs
            if(user.indexOf(props.id)===-1){
                setisUpvoted(false)
            }
            else{
                setisUpvoted(true)
            }
        }
        catch(err){
           
        }
    }
   
    
  
     
///////////////LOGIN CHECKKER//////////////////
//////////////manager/////////////////////////
function checkker(event){
    let blogId=event.target.getAttribute('id');
    if(isUpvoted){
        downVoteHandler(blogId);
    }
    else{
        UpVoteHandler(blogId);
    }
}
//////////////manager/////////////////////////
const [content, setcontent] = useState(props.upvotes)
//////////////upvotehandler/////////////////////////
async function UpVoteHandler(blogId){         
    console.log("UP"+blogId);
    var blog=await api.patch('blogs/upvote/'+blogId);
    setcontent(blog.data.upvotes);
   await api.patch(`user/blogPush/${UserId}&${blogId}`)
    setisUpvoted(true);
}
//////////////upvotehandler/////////////////////////
//////////////downvotehandler/////////////////////////
async function downVoteHandler(blogId){      
    console.log("down"+blogId);
    var blog=await api.patch('blogs/downvote/'+blogId);
    setcontent(blog.data.upvotes);  
    await api.patch(`user/blogPull/${UserId}&${blogId}`)
    setisUpvoted(false);
 }
//////////////downvotehandler/////////////////////////

return (
        <div>
            <div class="widget top-left">
  <div class="upvote thumbs">
    <div style={{marginRight:'25px'}}>
      <i class="thumbs-icon thumbs-icon-up"  onClick={isLoggedIn?checkker:()=>{alert("login")}} id={props.id} style={isUpvoted?{backgroundColor:"Green"}:{backgroundColor:"white"}} id={props.id}></i>
      <p>{content}</p>
    </div>
  </div>
  <div class="downvote thumbs">
    <div>
      <i class="thumbs-icon thumbs-icon-down" onClick={isLoggedIn?checkker:()=>{alert("login")}} ></i>
      <p>{content}</p>
    </div>
  </div>
</div>
        </div>
    )
}

export default UpandDownVoteBtns
