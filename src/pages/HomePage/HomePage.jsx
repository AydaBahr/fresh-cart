import React from 'react'
// import { counterContext } from '../../Context/CounterContex'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'  
import MainSlider from '../../Components/MainSlider/MainSlider'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import { Helmet } from 'react-helmet'
function HomePage() {

  
  return (
    <>
     <Helmet>
        <title>Fresh Cart</title>
    </Helmet>
    <MainSlider />
    <CategorySlider/>
    <FeaturedProducts />
    
    </>
  
  )
}

export default HomePage