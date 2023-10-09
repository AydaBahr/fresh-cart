import axios from 'axios'
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function OnlineForm() {
  let {onlinePayment,cartId} = useContext(CartContext)
  
  async function handleSubmit(values){
   let response =await onlinePayment( cartId ,values)
    console.log(response.data.session.url);
    window.location.href=response.data.session.url
  }
  const formik =useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:''
    },
    onSubmit:handleSubmit
  })
  
  return (
    <div className='container mx-auto w-100 mt-5 mb-5'>
      <form onSubmit={formik.handleSubmit}>

     <div className="form-group mt-5">
     <label  htmlFor="details">Details : </label>
      <input className='form-control' value={formik.values.details} onChange={formik.handleChange}onBlur={formik.handleBlur}name='details'id='details' type="text" />
     </div>

     <div className="form-group mt-5">
      <label htmlFor="phone">phone : </label>
      <input className='form-control' value={formik.values.phone} onChange={formik.handleChange}onBlur={formik.handleBlur}name='phone'id='phone' type="tel" />
      </div>

      <div className="form-group mt-5">
      <label htmlFor="city">city : </label>
      <input className='form-control' value={formik.values.city} onChange={formik.handleChange}onBlur={formik.handleBlur} name='city'id='city'type="text" />
      </div> 
      <button className='btn bg-main text-white mt-3' type='submit'>Pay Now</button>
      </form>
    </div>
  )
}

export default OnlineForm