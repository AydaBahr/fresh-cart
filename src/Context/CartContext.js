import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext()

export function CartContextProvider(props){

    const[cartId,setCartId]=useState(null)
    const[NoOfCart,setNoOfCart]=useState(0)

    
    let headers={
        token:localStorage.getItem('userToken')
    }
    
  function addToCart(productId){
      
      return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {productId:productId},

    {headers:headers}
    ).then((response)=>response )
    .catch((error)=>error)
    
}


function getLoggedCart(){
  return  axios.get('https://ecommerce.routemisr.com/api/v1/cart',
    {headers}
    ).then((response)=>response)
    .catch((error)=>error)
    
}
async function getCartId()
{
    let {data}= await getLoggedCart()
    setNoOfCart(data?.numOfCartItems)
    setCartId(data?.data?._id)
    // console.log(data.data._id);
    // console.log(data.numOfCartItems);
}
useEffect(()=>{
    getCartId()
},[])

function removeItem(productId)
{
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
    ,{headers}).then((response)=>response )
    .catch((error)=>error)
    
}
function onlinePayment(cartId , values)
{
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {shippingAddress:values},
    {headers})
    .then((response)=>response )
    .catch((error)=>error)

}
function UpdateQuantity(productId,count)
{
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
    ,{count},
    {headers})
    .then((response)=>response )
    .catch((error)=>error)

}


    return<CartContext.Provider value={{addToCart , getLoggedCart , removeItem ,UpdateQuantity,onlinePayment , cartId,NoOfCart,setNoOfCart}}>
        {props.children}
    </CartContext.Provider>
}