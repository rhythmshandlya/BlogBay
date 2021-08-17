import React from 'react'
import './stylesheets/EasyCaed.css'
import {  useState } from 'react';


const EasyCard = (props) => {
   
    const [state,setState]=useState(false);
   
   
    
    

    
    return (
        <div>
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
                        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                        <div class="user-info_ez">
                            <h5>{props.date}</h5>
                            <small>{props.interval}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EasyCard
