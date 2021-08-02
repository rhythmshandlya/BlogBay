import './stylesheets/AnimatedCard.css'
import React from 'react'

const AnimatedCard = () => {
    return (
        <div class="card">
            <figure class="card__thumb">
                <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="na" class="card__image" />
                <figcaption class="card__caption">
                    <h2 class="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
                    <p class="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
                    <a href="" class="card__button">Read more</a>
                </figcaption>
            </figure>
        </div>
    );
}

export default AnimatedCard
