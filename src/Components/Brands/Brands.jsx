import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getBrands } from '../../Redux/Brands/BrandsSlice'
import { ThreeCircles } from 'react-loader-spinner'

function Brands() {
    const {brands,loading} =useSelector((state)=>state.brandReducer)
    console.log(brands,loading);

    let dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getBrands())
    },[])
  return (
    <>
    {loading? <div className="loading">
        <ThreeCircles 
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
</div>:
<div className="container">
    <h1 className='text-main fw-bolder m-3 text-center'>Brands</h1>
  <div className="row">
    {brands.map((brand)=>
    <div className="col-md-2">
    <div className="card shadow mb-2">
      <img src={brand.image} alt=""  className="cursor-pointer w-100" />
    </div>
      <h4 className='h6 text-center mb-4'>{brand.name}</h4>


    </div>
    
    )}
  </div>
</div>

}
    </>
  )
}

export default Brands