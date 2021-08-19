import React from 'react'
import './stylesheets/CardExplore.css'
const CardExplore = (props) => {
    return (
        <div class="flex__item">
            <div class="card"><img class="card__img" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="Snowy Mountains" />
                <div class="card__content">
                    <h2 class="card__header">{`${props.title}`}</h2>
                    <p class="card__text">{`${props.content.slice(0,200)}...`}</p><button class="card__btn">Read More<span>&rarr;</span></button>
                </div>
            </div>
        </div>
    );
}

export default CardExplore
