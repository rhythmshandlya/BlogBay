import './stylesheets/AnimatedCard.css'
import React from 'react'

const AnimatedCard = (props) => {
    return (
        <div className="card_animated">
            <figure className="card__thumb_animated">
                <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="na" className="card__image_animated" />
                <figcaption className="card__caption_animated">
                    <h2 className="card__title_animated"><props classNameName="title"></props></h2>
                    <p className="card__snippet_animated">{`${props.content.slice(0,40)}...`}</p>
                    <a href="blogs/props._id" className="card__button_animated">Read more</a>
                </figcaption>
            </figure>
        </div>
    );
}

export default AnimatedCard
