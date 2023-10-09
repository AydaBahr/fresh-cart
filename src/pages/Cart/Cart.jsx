import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import { ThreeCircles } from  'react-loader-spinner'
import { Link } from "react-router-dom";
import emptyCart from '../../images/empty.png'
// import style from './Cart.module.css'

function Cart() {
  let { getLoggedCart, removeItem ,UpdateQuantity,setNoOfCart} = useContext(CartContext);

  const [Cart, setCart] = useState([]);

  async function getCart() {
    let { data } = await getLoggedCart();
    // console.log(data.numOfCartItems);
    setNoOfCart(data?.numOfCartItems)
    setCart(data);
  }
  
  async function removeCartItem(id) {
    let { data } = await removeItem(id);
    setCart(data);
    setNoOfCart(data?.numOfCartItems)
  }
  async function updateCart(id,count) {
    let { data } = await UpdateQuantity(id , count);
    setCart(data);
  }
  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      {Cart.data?.products.length !==0 ? (
        <div className="w-75 bg-main-light my-2 mx-auto p-2">
          {/* {console.log(Cart.data.products.length)} */}
          <h3>Shopping Cart</h3>
          <h6 className="text-main fw-bold">
            Cart Items : {Cart.numOfCartItems} items{" "}
          </h6> 
          <h6 className=" text-main fw-bold mb-4">
            Total Cart price : {Cart.data?.totalCartPrice} EGP{" "}
          </h6>
          {Cart.data?.products.map((product) => (
            <div key={product.product.id} className="row border-bottom py-3 align-items-center">
              <div className="col-md-1">
                <img
                  className="w-100"
                  src={product.product.imageCover}
                  alt=""
                />
              </div>
              <div className="col-md-11">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h3 className="h6">Title :{product.product.title}</h3>
                    <h6 className="text-main">Price :{product.price} EGP</h6>
                  </div>

                  <div>
                    <span onClick={()=>updateCart(product.product.id,product.count+1)} className=" border-main p-1">+</span>
                    <span className="mx-2">{product.count}</span>
                    <span onClick={()=>updateCart(product.product.id,product.count-1)} className=" border-main p-1">-</span>
                  </div>
                </div>
                <button onClick={()=>removeCartItem(product.product.id)} className="btn p-0">
                  <i className="fas fa-trash text-danger"></i> Remove{" "}
                </button>
              </div>
            </div> 

          ))}

         <div className="d-flex justify-content-center">
         <Link to={'/onlineForm'} className="btn m-3 bg-main text-white w-25"> Pay Online</Link>
          <Link className="btn m-3 bg-main text-white w-25">Cash on Delivery</Link>
         </div>
        </div>
      ) : 
        <>
        <div className="text-center ">
            <img className="m-5 w-25" src={emptyCart} alt="" />
        <h2 className="fw-bolder  text-main">Your Cart is empty</h2>
            <Link to={'/'}>
            <button className="btn bg-main fw-bold text-white mb-2">Go Shopping</button>
            </Link>
          </div>
          </>

      }
    </>
  );
}

export default Cart;
