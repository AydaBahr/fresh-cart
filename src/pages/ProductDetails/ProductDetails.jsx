import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Slider from 'react-slick'
import toast from 'react-hot-toast';

import { CartContext } from '../../Context/CartContext'

function ProductDetails() {

let{setNoOfCart,addToCart}=useContext(CartContext)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };


  let {id} =useParams()
 const [details, setDetails]=useState([])
//  const [Images, setImages]=useState(null)
  async function getDetails(id){
let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
console.log(data.data.images);

    setDetails(data.data)
}

async function addProduct(id){
  let {data}= await addToCart(id)
  if(data?.status==='success'){
    
    setNoOfCart(data.numOfCartItems)
   toast.success('product added successfully!');
 }
  else{
   toast.error("failed to add the product")
  }
 //  console.log(response);
 }

useEffect(()=>{

  getDetails(id)
})
  return<>
  {details? <div>
   <Helmet>
        <title>{details.title}</title>
    </Helmet>

    <div className="container">
      <div className="row py-4 justify-content-center align-items-center">
        <div className="col-md-4">
        <Slider {...settings}>
    {details?.images?.map((img)=>
    <img src={img}className='w-100'  alt={details.title} />
    )}
   </Slider>      
     </div>
        <div className="col-md-6">
          <h2 className='h5 fw-bold'>{details.title}</h2>
          <p >"{details.description}"</p>
          <h6 className='text-main fw-bold'>{details.category?.name}</h6>
          <h6 className='text-main fw-bold'>Price: {details.price} EGP</h6>

          <div className='d-flex justify-content-between'>
            <span>Rating Quantity: {details.ratingsQuantity}</span>
            <span><i className='fas fa-star rating-color'></i> {details.ratingsAverage}</span>

          </div>
          <button  onClick={()=>addProduct(id)} className='btn bg-main w-100 text-white mt-3'>Add to Cart</button>
        </div>
      </div>
    </div>
  </div> :''}
  
  </>
  
}

export default ProductDetails