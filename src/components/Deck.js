import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Deck({ slides }) {
  var settings = {
    className: 'content',
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <section>
      <Slider {...settings}>
        {slides.map((slide) => {
          return slide;
        })}
      </Slider>
    </section>
  );
}
