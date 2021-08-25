import React from 'react'
import { Link } from 'react-router-dom'
import './stylesheets/CardExplore.css'
const CardExplore = (props) => {
    return (
        <div class="flex__item">
            <div class="card"><img class="card__img" src={props.image} alt="IMG_NF" />
                <div class="card__content">
                    <h2 class="card__header">{`${props.title}`}</h2>
                    <p class="card__text">{`${props.content.slice(0, 200)}...`}</p><Link to={`/blog/${props.id}`}><button class="card__btn">Read More<span>&rarr;</span></button></Link>
                </div>
            </div>
        </div>
    );
}

export default CardExplore
