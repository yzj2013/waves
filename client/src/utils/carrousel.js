import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrousel = ({ items }) => {
  const setting = {
    dot: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const generateSlides = () =>
    items
      ? items.map((item, i) => (
          <div key={i}>
            <div
              className='featured_image'
              style={{
                background: `url(${item.img})`,
                height: `${window.innerHeight}px`,
              }}
            >
              <div className='featured_action'>
                <div className='tag title'>{item.lineOne}</div>
                <div className='tag low_title'>{item.lineTwo}</div>
                <div>BUTTONS</div>
              </div>
            </div>
          </div>
        ))
      : null;

  return <Slider {...setting}>{generateSlides()}</Slider>;
};

export default Carrousel;
