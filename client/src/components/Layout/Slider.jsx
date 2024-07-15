// SliderComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/banner.jpg" alt="Slide 1" style={{ width: '100%', height: '180px' }} />
      </div>
      <div>
        <img src="/images/banner.jpg" alt="Slide 2" style={{ width: '100%', height: '180px' }} />
      </div>
      <div>
        <img src="/images/banner.jpg" alt="Slide 3" style={{ width: '100%', height: '180px' }} />
      </div>
      <div>
        <img src="/images/banner.jpg" alt="Slide 4" style={{ width: '100%', height: '180px' }} />
      </div>
    </Slider>
  );
};

export default SliderComponent;
