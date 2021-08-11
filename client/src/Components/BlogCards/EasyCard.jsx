import React from 'react'
import './stylesheets/EasyCaed.css'
import {  useState } from 'react';
const EasyCard = () => {
    const [state,setState]=useState(false);
    // useEffect(() => {
    //     document.getElementsByClassName("blog-filter").style.display='absolute'
    // }, []);
    
    return (
        <div>
        <div className="blog-filter" style={state?{display:"flex"}:{display:"none"}} onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}></div>
        <h3 className="thumbnail-title" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)} style={state?{visibility:"visible"}:{visibility:"hidden"}}>Read More</h3>
            <div  class="card_ez" onMouseEnter={()=>setState(true)} onMouseLeave={()=>setState(false)}>
                <div class="card-header">
                    <img src="https://source.unsplash.com/user/erondu/1600x900" alt="rover" />
                </div>
                <div class="card-body">
                    <span class="tag tag-teal">Technology</span>
                    <h4>Why is the Tesla Cybertruck designed the way it is?</h4>
                    <p>An exploration into the truck's polarising design</p>
                    <div class="user_ez">
                        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                        <div class="user-info_ez">
                            <h5>July Dec</h5>
                            <small>2h ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EasyCard
