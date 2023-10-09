import React from 'react'
import error from '../../images/error.svg'
function NotFound() {
  return (
    <div className='container d-flex justify-content-center align-items-center  ' >   
      <img className='w-50 mt-5' src={error} alt="" />
    </div>
  )
}

export default NotFound