import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function CategorySlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows:false
  };
 const [categories, setCategories] = useState([])
async function getCategories(){
  let {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  console.log(data.data);
  setCategories(data.data)
}

useEffect(()=>{
  getCategories()
},[])

  return (
    <div className='container mb-5'>
    <Link to={'/categories'}> 
     <h2 className='text-main fw-bold'>See Categories</h2>
      </Link> 
   <Slider {...settings}>
    {categories.map((category)=>(
    <>
    <img src={category.image} className='rounded-4 px-2 w-100' height={200} alt={category.name} />
    <h6 className='text-center text-main'>{category.name}</h6>
    </>
    ))}
   </Slider>
   </div>
  )
}

export default CategorySlider