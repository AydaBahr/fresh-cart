import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CategoryDetails() {

    let {id} =useParams()
    console.log(id);
    const [categoriesDetails , setCatedoryDetails]=useState([])

    async function getcategoriesDetails(id){
      let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
      console.log(data.data);
      setCatedoryDetails(data.data)
    }
    useEffect(()=>{
        getcategoriesDetails(id)
    },[])
  return (
   
    <div className="container">
        {categoriesDetails? 
        <div className="row">
            <div className="inner mt-5 text-center ">
                <h2 className='fw-bolder text-main'>{categoriesDetails.name}</h2>
                <img className='rounded-4 w-25' src={categoriesDetails.image} alt="" />
            </div>
        </div>
        :""}
       
    </div>
  )
}

export default CategoryDetails