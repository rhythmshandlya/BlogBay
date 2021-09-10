import React from 'react';
import './Stylesheets/Carosel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselSlider = () => {
    return (
        <div className="carousel-container">
            <Carousel showArrows={true} >
                <div>
                    <img src="https://i.ibb.co/qWfn6rY/cover1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/brCjCGV/cover2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/7XKHQ17/cover4.jpg" />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselSlider
