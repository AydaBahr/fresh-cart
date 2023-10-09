import Slider from "react-slick";
import React from 'react'
import slide1 from '../../images/slider-image-1.jpeg'
import slide2 from '../../images/slider-image-2.jpeg'
import slide3 from '../../images/slider-image-3.jpeg'

function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <>
    <div className="container">
    <div className="row gx-0 mb-5">
      <div className="col-md-9">
    <Slider {...settings}>
   <img height={400} className='w-100' src={slide1} alt="" />
   <img height={400} className='w-100' src={slide2} alt="" />
   <img height={400} className='w-100' src={slide3} alt="" />
  </Slider> 
  </div> 
  <div className="col-md-3">
   <img height={200} className='w-100' src={slide1} alt="" />
   <img height={200} className='w-100' src={slide2} alt="" />

  </div>
  </div>
  </div>
  </>
  )
}

export default MainSlider