import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../Redux/Categories/CategoriesSlice'
import { ThreeCircles } from  'react-loader-spinner'
import { Link } from 'react-router-dom'

function Categories() {

  const dispatch =useDispatch()
  const {loading , isError ,categories}= useSelector((state)=>state.CategoriesReducer)
  console.log(categories,loading);

  useEffect(()=>{
    dispatch(getCategories())
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
    <h1 className='text-main fw-bolder text-center'>Categories</h1>
  <div className="row mt-5">
    {categories.map((category)=>
    <div key={category._id} className="col-md-3">
    <div className="categories mb-5">
      <img src={category.image} alt="" height={300} className="rounded-4 cursor-pointer gy-2 w-100" />
      <Link to={`/categoryDetails/${category._id}`}>   
         <h4 className='category h6 text-center mt-2 '>{category.name}</h4>
      </Link>
    </div>


    </div>
    
    )}
  </div>
</div>

}
    </>

  )
}

export default Categories