import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../images/freshcart-logo.svg'
// import { counterContext } from '../../Context/CounterContex'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'
import jwtDecode from 'jwt-decode'

function NavBar() {
  let token =localStorage.getItem('userToken')
  let decodedToken = jwtDecode(token)

  // let {counter} =useContext(counterContext)
  let {userToken , setUserToken} =useContext(UserContext)
  let{NoOfCart}=useContext(CartContext)
  let navigate =useNavigate()

  function logout(){
    localStorage.removeItem('userToken')
    setUserToken(null)
    navigate("/login") 
  }
  return <>

<nav className="navbar navbar-expand-lg bg-body-tertiary  ">
  <div className="container">
    <Link to="" className="navbar-brand" >
      <img src={logo} alt="" />
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {userToken!==null?<>
          <li className="nav-item">
          <Link to="" className="nav-link nav1 active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="cart" className="nav-link">Cart</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="products" className="nav-link">Products</Link>
        </li> */}
        
        <li className="nav-item">
          <Link to="categories" className="nav-link">Categories</Link>
        </li>
        <li className="nav-item">
          <Link to="brands" className="nav-link">Brands</Link>
        </li>
        </> :''}
        
      </ul>
      <ul className='align-items-center navbar-nav ms-auto list-unstyled mb-2 mb-lg-0 '>
       
        <li>
          <i className='mx-2 fa-brands fa-facebook'></i>
        </li>
        <li>
          <i className='mx-2 fa-brands fa-youtube'></i>
        </li>
        <li>
          <i className='mx-2 fa-brands fa-linkedin'></i>
        </li>
        <li>
          <i className='mx-2 fa-brands fa-tiktok'></i>
        </li>
        <li>
          <i className='mx-2 fa-brands fa-instagram'></i>
        </li>
        
        
        {userToken!==null?
       <>
       <span className='position-relative'>
                <Link to={'/cart'}>
                  <div className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-main'>{NoOfCart}</div>
                  <i className="fa-solid fa-shopping-cart text-main mx-2"></i>
                </Link>
              </span>
              <li>
                  <span onClick={() => logout()} className="nav-link cursor-pointer">log out</span>
                </li>
                <li>
          <Link className='mx-2 ' to={'profile'}>
          <i className="fas fa-user"></i> 
          <span className='fw-bold mx-2 text-main'>{decodedToken.name}</span>
        
          </Link>
        </li>
                </>
        :<>
        <li>
        <Link  to="register" className="nav-link">Register</Link >
        </li>
        <li>
        <Link  to="login" className="nav-link ">Login</Link >
        </li>
        </>}
       
      </ul>
    </div>
  </div>
</nav>
    </>  
}

export default NavBar