import React from 'react'
import './stylesheets/card1x2_2.css'
const Card1x2_2 = () => {
    return (
        <div className="row">
  <div className="example-2 card">
    <div className="wrapper">
      <div className="header">
        <div className="date">
          <span className="day">12</span>
          <span className="month">Aug</span>
          <span className="year">2016</span>
        </div>
        <ul className="menu-content">
          <li>
            <a href="a" className="fa fa-bookmark-o"> </a>
          </li>
          <li><a href="b" className="fa fa-heart-o"><span>18</span></a></li>
          <li><a href="c" className="fa fa-comment-o"><span>3</span></a></li>
        </ul>
      </div>
      <div className="data">
        <div className="content">
          <span className="author">Jane Doe</span>
          <h1 className="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
          <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
          <a href="#" className="button-readmore">Read more</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default Card1x2_2
