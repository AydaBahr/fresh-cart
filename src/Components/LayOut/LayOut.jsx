import React, { useContext, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { Offline, Online } from "react-detect-offline";

export default function LayOut() {

  let{setUserToken} =useContext(UserContext)
  
  useEffect(()=>{
  if(localStorage.getItem('userToken')!==null)
  {
     setUserToken(localStorage.getItem('userToken'))
  }
},[])
return (
    <>
    <NavBar />
    <Outlet></Outlet>

    
      <Offline> 
        <div className="network">
        <i className='fas fa-wifi'></i> you are offline
        </div>
        </Offline>
      
    
    </>
    
  )
}

