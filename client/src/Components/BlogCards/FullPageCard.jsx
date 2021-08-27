import React from 'react'
import './stylesheets/FullPageCard.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Swiperr from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
function swipe(){
  var swiper = new Swiperr('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
}
const FullPageCard = () => {
  return (
   <Swiper>
     <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper">
        <SwiperSlide>
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""/>
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
              <a href="#" class="blog-slider__button">READ MORE</a>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg" alt=""/>
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
              <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              <a href="#" class="blog-slider__button">READ MORE</a>
            </div>
          </div>
          
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt=""/>
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">26 December 2019</span>
              <div class="blog-slider__title">Lorem Ipsum Dolor</div>
              <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              <a href="#" class="blog-slider__button">READ MORE</a>
            </div>
          </div>
          </SwiperSlide>
        </div>
        <div class="blog-slider__pagination"></div>
      </div>
      {swipe()}
   </Swiper>
  )
}

export default FullPageCard

