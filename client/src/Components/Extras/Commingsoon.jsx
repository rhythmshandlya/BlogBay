import React, { useEffect } from 'react'
import './stylesheets/commingsoon.css'
import Navbar from '../NavbarComponents/Navbar';


const Commingsoon = () => {
    
    useEffect(() => {
        let comingDate = new Date('Feb 8, 2022 13:12:00');

        let d = document.getElementById('days-cs')
        let h = document.getElementById('hours-cs')
        let m = document.getElementById('minutes-cs')
        let s = document.getElementById('seconds-cs')

        let x = setInterval(function () {
            let now = new Date()
            let selisih = comingDate.getTime() - now.getTime()

            let days = Math.floor(selisih / (1000 * 60 * 60 * 24))
            let hours = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            let minutes = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
            let seconds = Math.floor(selisih % (1000 * 60) / 1000)

            d.innerHTML = getTrueNumber(days)
            h.innerHTML = getTrueNumber(hours)
            m.innerHTML = getTrueNumber(minutes)
            s.innerHTML = getTrueNumber(seconds)

            if (selisih < 0) {
                clearInterval(x)
                d.innerHTML = '00'
                h.innerHTML = '00'
                m.innerHTML = '00'
                s.innerHTML = '00'
            }
        }, 1000)

        function getTrueNumber(x) {
            if (x < 10) return '0' + x
            else return x
        }

    });

    return (
        <>
        <Navbar/>
        <div>
            <div className="page-cs">
                <div className="countdown-col-cs col-cs">
                    <div className="time-cs middle-cs">
                        <span><div id="days-cs">00</div> Days</span>
                        <span><div id="hours-cs">00</div> Hours</span>
                        <span><div id="minutes-cs">00</div> Minutes</span>
                        <span><div id="seconds-cs">00</div> Seconds</span>
                    </div>
                </div>
                <div className="newsletter-col-cs col-cs">
                    <div className="newslatter-cs middle-cs">
                        <h2>Awesome tutorials coming very soon.</h2>
                        <p>Subscribe to get notification when we start</p>
                        <form>
                            <input type="text" className="email-input" placeholder="Enter Your Email" placeholder="Email"/>
                            <button type="button" className="newslatter-button-cs">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            </>
    );
}

export default Commingsoon
