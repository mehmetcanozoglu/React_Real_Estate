import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { data } from '../../util/Slider';
import './Residens.css'
const Residens = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div id='hizmetler' className='r-container'>
        <a href=""></a>
        <p className='orangeText'> Uygun fiyata</p>
        <h2 className='primaryText'>Satılık mekanlar</h2>
        <Slider {...settings}>
          {data.map(item =>
            <div className='r-content'>
              <div className='flexColStart r-card'>
                <img src={item.image} alt="" />
                <div className='secondaryText'>{item.price}tl</div>
                <span className='primaryText r-name'>{item.name}</span>
                <span className='secondaryText'>{item.detail}</span>
              </div>
            </div>
          )}
        </Slider>
      </div>
    </div>
  )
}

export default Residens