import React from 'react'
import './stylesheets/upvote.css'
import api from './../../Util/api'
import { useEffect, useState } from 'react'

const UpandDownVoteBtns = (props) => {
///////////////LOGIN CHECKKER//////////////////
    const [isLoggedIn, setisLoggedIn] = useState();
    const [Uid, setUid] = useState();
    useEffect(() => {
        async function find() {
            try {
                let res = await api.get('user/isLoggedIn', { withCredentials: true });
                if (res.data.user) {
                    setisLoggedIn(true);
                    setUid(res.data.user._id);
                    console.log(Uid);
                    console.log(res.data.user._id)
                    // console.log(res.data.user._id);
                    // console.log(UserId);
                    checkIfUpvoted(res.data.user._id);
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
                setisUpvoted(false);
            }
            else{
                setisUpvoted(true);
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
//////////////manager/////////////////////////
const [upcontent, setupcontent] = useState(props.upvotes)
//////////////upvotehandler/////////////////////////
async function UpVoteHandler(blogId){         
    var blog=await api.patch('blogs/upvote/'+blogId);
    setupcontent(blog.data.upvotes);
   await api.patch(`user/blogPush/${Uid}&${blogId}`)
    checkIfUpvoted(Uid);
}

//////////////upvotehandler/////////////////////////
//////////////unUpvotehandler/////////////////////////
async function unUpVoteHandler(blogId){      
    console.log("down"+blogId);
    var blog=await api.patch('blogs/downvote/'+blogId);
    setupcontent(blog.data.upvotes);  
    await api.patch(`user/blogPull/${Uid}&${blogId}`)
    checkIfUpvoted(Uid);
 }
//////////////unUpvotehandler////////////////////////

return (
        <div>
            <div class="widget top-left">
  <div class="upvote thumbs">
    <div style={{marginRight:'25px'}}>
      <i class="thumbs-icon thumbs-icon-up"  onClick={isLoggedIn?checkkerUp:()=>{alert("login")}} id={props.id} style={isUpvoted?{backgroundColor:"#75ceb7"}:{backgroundColor:"white"}}></i>
      <p>{upcontent}</p>
    </div>
  </div>
</div>
        </div>
    )
}

export default UpandDownVoteBtns
