import React from 'react'
import jwtDecode from 'jwt-decode'

function Profile() {
  let token =localStorage.getItem('userToken')
  let decodedToken = jwtDecode(token)
  return (
    <div >user Name :{decodedToken.name}</div>
  )
}

export default Profile