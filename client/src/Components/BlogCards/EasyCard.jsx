import React from 'react'
import './stylesheets/EasyCaed.css'
const EasyCard = () => {
    return (
        <div>
            <div  class="card_ez">
                <div class="card-header">
                    <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
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
