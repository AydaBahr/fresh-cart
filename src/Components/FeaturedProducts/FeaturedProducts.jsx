import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ThreeCircles } from  'react-loader-spinner'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import { useQuery } from 'react-query'


function FeaturedProducts() {

//   function getProducts(){
//     return axios.get('https://ecommerce.routemisr.com/api/v1/products')
//   }
//   let {isLoading,isFetching,data,refetch} =useQuery('fearuredProducts',getProducts,
//   {cacheTime:3000,
//   // refetchOnMount:false
//   enabled:false
// })
  // console.log(data?.data.data);
  // console.log(isLoading, "loading");
  // console.log(isFetching, "fetching");
    const [products, setProducts]=useState([])
  const[isLoading , setisLoading]=useState(true)

  let {addToCart ,setNoOfCart}=useContext(CartContext)


async function addProduct(id){
 let {data}= await addToCart(id)
 if(data.status==='success'){
   
   setNoOfCart(data.numOfCartItems)
  toast.success('product added successfully!');
}
 else{
  toast.error("failed to add the product")
 }
//  console.log(response);
}
  async function getProducts(){
    let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products')
      setProducts(data.data)
      setisLoading(false)
  }
    useEffect(()=>{
      getProducts()
    },[])
  return (
    <>
    <div className="container py-2">
      <h2 className='fw-bold text-center mb-5'>Featured Products</h2>
        {isLoading? 
        <div className="d-flex justify-content-center">
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
</div>
:<div className="row">
  {/* <button onClick={refetch} className='bg-main text-white w-100'>refetch</button> */}
       {products.map((product)=>
       <div  key={product.id} className="col-md-2">
        <div className="product cursor-pointer p-3">
         <Link to={`/details/${product.id}`}>
          <img className='w-100' src={product.imageCover} alt="" />
          <span className='text-main font-sm fw-bold'>{product.category.name}</span>
          <h3 className='h6 '>{product.title.split(' ').splice(0,2).join(' ')}</h3>
          <div className='d-flex justify-content-between mt-3'>
            <span>{product.price} EGP</span>
            <div>
            <span>{product.ratingsAverage} <i className='fas fa-star rating-color'></i></span>
            </div>
          </div>
        </Link>
          <button onClick={()=>addProduct(product.id)} className='btn bg-main w-100 font-sm mt-2 text-white'>Add to Cart</button>
        </div>
        </div>
       )} 
      </div>}
      
    </div>
    
    </>
  )
}

export default FeaturedProducts