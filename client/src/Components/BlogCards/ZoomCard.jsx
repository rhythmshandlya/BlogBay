import React from 'react'
import './stylesheets/ZoomCard.css'
const imageBg= 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_5.png';

const ZoomCard = () => {
    return (
            <div class="container-fluid">
                <div class="">
                    <figure>
                        <div class="media" style={{backgroundImage:`URL(${imageBg})`}}></div>
                        <figcaption><svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <mask id="mask" x="0" y="0" width="100%" height="100%">
                                    <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect><text class="title" dx="50%" dy="2.5em">ENJOY</text><text class="title" dx="50%" dy="3.5em">EVERY</text><text class="title" dx="50%" dy="4.5em">MOMENT</text>
                                </mask>
                            </defs>
                            <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
                        </svg>
                            <div class="body_zm">
                                <p>Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone.</p>
                            </div>
                        </figcaption><a href="id"> </a>
                    </figure>
                </div>
            </div>
    );
}

export default ZoomCard
