import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from 'yup'
import { RotatingLines } from  'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css'
function Register() {
  let navigate=useNavigate()

  const [error, setError] = useState(null)
  const[isLoading,setisLoading]=useState(false)

  async function handleSubmit(values) {
    setisLoading(true)
    let {data}=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
    .catch((err)=>{
      setError(err.response.data.message)
      setisLoading(false)
      // console.log(err.response.data.message);
    })
     if(data.message==='success'){
       setisLoading(false)
       setError(null)
       navigate('/login')
     }

   
    console.log(data);
  }
  // function validate(values) {
  //   let passregx = /[a-z][1-9]{3,9}/;             
  //   let phoneregex = /^01[0-2]{1}[0-9]{8}$/;
  //   let errors = {};
  //   //name
  //   if (!values.name) {
  //     errors.name = "name is required";
  //   } else if (values.name.length < 3) {
  //     errors.name = "Name must be at least 3 character";
  //   } else if (values.name.length > 15) {
  //     errors.name = "Name invalid";
  //   }
  //   //email
  //   if (!values.email) {
  //     errors.email = "Email Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }
  //   //pass
  //   if (!values.password) {
  //     errors.password = "password required";
  //   } else if (!passregx.test(values.password)) {
  //     errors.password = "password invalid";
  //   }
  //   //repass
  //   if (!values.rePassword) {
  //     errors.rePassword = "re password required";
  //   } else if (values.rePassword !== values.password) {
  //     errors.rePassword = "password doesn't match ";
  //   }
  //   //phone
  //   if (!values.phone) {
  //     errors.phone = "phone Required";
  //   } else if (!phoneregex.test(values.phone))
  //     errors.phone = "phone isn't valid";
  //   return errors;
  // }

  let validationSchema= yup.object({
    name:yup.string().required().min(3).max(10),
    email:yup.string().email().required(),
    password:yup.string().required().matches(/[a-z][1-9]{3,9}/ ,"password is invalid"),
    rePassword:yup.string().required().oneOf([yup.ref('password'),"password doesn't match"]),
    phone:yup.string().required().matches(/^01[0-2]{1}[0-9]{8}$/ ,"phone isn't valid")
  })
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
   <div className={styles.register}>
    <div className="container mx-auto w-50 mt-5 mb-5">
      {error &&<div className="alert alert-danger">{error}</div>}
      <h1 className="fw-bold">Registeration</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group my-5">
          <label htmlFor="name"> Name:</label>
          <input
            className="form-control"
            value={formik.values.name}
            id="name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name &&(
            <div className="alert alert-danger">
            {formik.errors.name}
          </div>
          )}

        </div>
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
        <div className="form-group my-5">
          <label htmlFor="rePassword"> Repassword:</label>
          <input
            className="form-control"
            value={formik.values.rePassword}
            id="rePassword"
            type="password"
            name="rePassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
         {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="alert alert-danger">
            {formik.errors.rePassword}
          </div>
          )}
        </div>
        <div className="form-group my-5">
          <label htmlFor="phone"> phone:</label>
          <input
            className="form-control"
            value={formik.values.phone}
            id="phone"
            type="tel"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

          />
          {formik.errors.phone &&formik.touched.phone && (
            <div className="alert alert-danger">
            {formik.errors.phone}
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
 Register
</button>
 }
       
      </form>
    </div>
    </div>
  );
}

export default Register;
