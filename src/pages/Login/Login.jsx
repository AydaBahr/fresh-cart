import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import * as yup from 'yup'
import { useNavigate } from "react-router-dom";
import { RotatingLines } from  'react-loader-spinner'
import { UserContext } from "../../Context/UserContext";

function Login() {
  let {setUserToken}=useContext(UserContext)
  let navigate=useNavigate()  


  const [error, setError] = useState(null)
  const[isLoading,setisLoading]=useState(false)

  async function handleSubmit(values) {
    setisLoading(true)
    let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
    .catch((err)=>{
      setError(err.response.data.message)
      setisLoading(false)
      // console.log(err.response.data.message);
    })
     if(data.message==='success'){
       setisLoading(false)
      //  console.log(data.token);
       setError(null)
       localStorage.setItem('userToken',data.token)
       setUserToken(data.token)
       navigate('/')
     }

   
    console.log(data);
  }
  

  let validationSchema= yup.object({
    email:yup.string().email().required(),
    password:yup.string().required().matches(/[a-z][1-9]{3,9}/ ,"password is invalid"),
  })
  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
     
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="container mx-auto w-50 mt-5 mb-5">
      {error &&<div className="alert alert-danger">{error}</div>}
      <h1 className="fw-bold">Login</h1>
      <form onSubmit={formik.handleSubmit}>
       
        <div className="form-group my-5">
          <label htmlFor="email"> Email:</label>
          <input
            className="form-control"
            value={formik.values.email}
            id="email"
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
         {formik.errors.email && formik.touched.email &&(
            <div className="alert alert-danger">
            {formik.errors.email}
          </div>
          )}
        </div>
        <div className="form-group my-5">
          <label htmlFor="password"> Password:</label>
          <input
            className="form-control"
            value={formik.values.password}
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
         
          />
          {formik.errors.password && formik.touched.password &&(
            <div className="alert alert-danger">
            {formik.errors.password}
          </div>
          )}
        </div>
       
        {isLoading ? <RotatingLines
  strokeColor="green"
  strokeWidth="5"
  animationDuration="0.75"
  width="50"
  visible={true}
/> :
 <button type="submit" className="btn bg-main text-white fw-bold ">
 Login
</button>
} 
       
      </form>
    </div>
  );
}

export default Login;
