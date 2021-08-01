import React from 'react'
import './stylesheets/card1x2.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card1x2 = () => {
    return (
        <div className="example-1 card">
        <div className="wrapper">
          <div className="date">
            <span className="day">12</span>
            <span className="month">Aug</span>
            <span className="year">2016</span>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">Jane Doe</span>
              <h1 className="title"><a href="a">Boxing icon has the will for a couple more fights</a></h1>
              <p className="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
              <label for="show-menu" className="menu-button"><span></span></label>
            </div>
            <input type="checkbox" id="show-menu" />
            <ul className="menu-content">
              <li><a href="b" className="fa fa-bookmark-o"> </a></li>
              <li><a href="c" className="fa fa-heart-o"><span>47</span></a></li>
              <li><a href="d" className="fa fa-comment-o"><span>8</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Card1x2
