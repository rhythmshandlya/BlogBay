import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/EasyCaed.css'
import api from './../../Util/api'
import UpvoteBtns from './UpandDownVoteBtns';
const EasyCard = (props) => {
    const [dp, dpSetter]=useState();
    var now=new Date();
    var post=new Date(props.content.date);
    var net=((now-post)/(1000*60*60*24));
    var bloggerPic="";
    if(net>365){
        net='Long Time ago';
    }
    else{
        if(net>30){
        net=Math.floor(net/30)+" Mon ago";
        }
        else{
            if(net>7){
                net=Math.floor(net/7)+" W ago";
            }
            else{
                if(net>1){
                net=Math.floor(net)+ " D ago";
                }
                else{
                    if(net*24>1)
                net=Math.floor(net*24)+ "h ago"
                    else{
                        net="now";
                    }
                }
            }
        }
    }
    var trimmedStringContent = (props.content.content.blocks[0].data.text).substring(0, 80);
    var trimmedStringTitle = ((props.content.title).substring(0, 50));
    
        useEffect(() => {
            async function getMePhoto(id){
             try{
                 bloggerPic= await api.get('http://localhost:8000/api/v1/user/'+id);
                 bloggerPic=bloggerPic.data.user.dp
                 dpSetter(bloggerPic);
             }
             catch(err){
                 
             }
         }
         getMePhoto(props.content.authorID); 
         }, [])
        
    const [state,setState]=useState(false);
    return (
        <div zxc="help">
        <div className="blog-filter" style={state?{display:"flex"}:{display:"none"}} onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}></div>
      <Link to={`/blog/${props.content._id}`}>  <h3 className="thumbnail-title" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)} style={state?{visibility:"visible"}:{visibility:"hidden"}} >Read More</h3></Link>
            <div  class="card_ez" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}>
                <div class="card-header">
                    <img src={props.content.blogImages[0]} alt="rover" />
                </div>
                <div class="card-body">
                    <span class="tag tag-teal">{props.content.category}</span>
                    <h4>{trimmedStringTitle}</h4>
                    <p>{trimmedStringContent+"..."}</p>
                    <div class="user_ez">
                        <img src={dp} alt="user" />
                        <div class="user-info_ez">
                            <small>{props.interval}</small>
                        </div>
                        <UpvoteBtns id={props.content._id} upvotes={props.content.upvotes} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EasyCard
// content={} category={} uid={Uid} title={} blogLink={} interval={net} bloggerPic={dp} ID={content._id} upvotes={} 