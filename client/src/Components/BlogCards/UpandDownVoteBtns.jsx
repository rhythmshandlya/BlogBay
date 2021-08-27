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
                    checkIfDownvoted(props.uid);
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

    const [isDownvoted, setisDownvoted] = useState();
    async function checkIfDownvoted(id){
        try{
           let user= await api.get('http://localhost:8000/api/v1/user/'+id);
            user=user.data.user.downvotedBlogs
            if(user.indexOf(props.id)===-1){
                setisDownvoted(false)
            }
            else{
                setisDownvoted(true)
            }
        }
        catch(err){
           
        }
    }
   
    
  
     
///////////////LOGIN CHECKKER//////////////////
//////////////manager/////////////////////////
function checkkerUp(event){
    let blogId=event.target.getAttribute('id');
    if(isUpvoted){
        unUpVoteHandler(blogId);
    }
    else{
        UpVoteHandler(blogId);
    }
}
function checkkerDown(event){
    let blogId=event.target.getAttribute('id');
    if(isDownvoted){
        unDownVoteHandler(blogId);
    }
    else{
        // UpVoteHandler(blogId);
    }
}
var response;
//////////////manager/////////////////////////
const [upcontent, setupcontent] = useState(props.upvotes)
const [downcontent, setdowncontent] = useState(props.downvotes)
//////////////upvotehandler/////////////////////////
async function UpVoteHandler(blogId){         
    var blog=await api.patch('blogs/upvote/'+blogId);
    setupcontent(blog.data.upvotes);
    response={task:"upvotedBlogs"}
   await api.patch(`user/blogPush/${UserId}&${blogId}`)
    setisUpvoted(true);
}
//////////////upvotehandler/////////////////////////
//////////////unUpvotehandler/////////////////////////
async function unUpVoteHandler(blogId){      
    console.log("down"+blogId);
    var blog=await api.patch('blogs/downvote/'+blogId);
    setupcontent(blog.data.upvotes);  
    await api.patch(`user/blogPull/${UserId}&${blogId}`)
    setisUpvoted(false);
 }
//////////////unUpvotehandler/////////////////////////
//////////////unDownvotehandler/////////////////////////
async function unDownVoteHandler(blogId){      
    console.log("down"+blogId);
    var blog=await api.patch('blogs/downvote/'+blogId);
    setupcontent(blog.data.upvotes);  
    await api.patch(`user/blogPush/${UserId}&${blogId}`)
    setisUpvoted(false);
 }
//////////////unDownvotehandler/////////////////////////

return (
        <div>
            <div class="widget top-left">
  <div class="upvote thumbs">
    <div style={{marginRight:'25px'}}>
      <i class="thumbs-icon thumbs-icon-up"  onClick={isLoggedIn?checkkerUp:()=>{alert("login")}} id={props.id} style={isUpvoted?{backgroundColor:"#75ceb7"}:{backgroundColor:"white"}} id={props.id}></i>
      <p>{upcontent}</p>
    </div>
  </div>
  <div class="downvote thumbs">
    <div>
      <i class="thumbs-icon thumbs-icon-down" onClick={isLoggedIn?checkkerDown:()=>{alert("login")}} ></i>
      <p>NULL</p>
    </div>
  </div>
</div>
        </div>
    )
}

export default UpandDownVoteBtns
