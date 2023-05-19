import React from 'react'
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  // const addProductValidationSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .max(15, 'Name maksimum 15 simvoldan ibarət olamlidir!')
  //     .required("Name doldurulmalıdır!"),
  //   email: Yup.string()
  //     .email('Yalnış emali adress!')
  //     .required('Email doldurulmalıdır!')
  //     .test("email", "Email  @code.edu.az ilə bitməlidir!", (value) => {
  //       return value.endsWith("@code.edu.az");
  //     }),
  //   gender: Yup.string().required("Gender seçilməlidir!"),
  //   password: Yup.string()
  //     .required("Password doldurulmalıdır!")
  //     .min(8, "Minimum 8 simvoldan ibarət olamlidir!")
  //     .matches(/^(?=.*[A-Z])/, "Password böyük hərf ilə başlamalıdır !"),
  //   confirmPassword: Yup.string()
  //     .required("Confirm password doldurulmalıdır!")
  //     .min(8, "Minimum 8 simvoldan ibarət olamlidir!")
  //     .matches(/^(?=.*[A-Z])/, " Confirm Password böyük hərf ilə başlamalıdır !")
  //     .oneOf([Yup.ref("password"), null], "Password ilə eyni deyil!"),

  // });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      gender: "female",
      password: "",
      confirmPassword: "",
    },
   // validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert("Qeydiyyatdan uğurla keçdiniz!");


    },
  });
  return (
    <div className="login-page">
    <div  className="login-box">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <>
       
          <div style={{ display: "flex", alignItems: "end", flexWrap: "wrap", padding: "20px 0" }}>
            <label htmlFor="email" style={{ minWidth: '150px', display: 'inline-block' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ border: "none", width: 230, padding: 10, backgroundColor: "transparent", borderBottom: "1px solid gray", color: "white" }}
            />
            <p style={{ color: "red" }}>{formik.errors?.email}</p>
          </div>
          <div style={{ display: "flex", alignItems: "end", flexWrap: "wrap", padding: "20px 0" }}>
            <label htmlFor="password" style={{ minWidth: '150px', display: 'inline-block' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              style={{ border: "none", width: 230, padding: 10, backgroundColor: "transparent", borderBottom: "1px solid gray", color: "white" }}
            />
            <p style={{ color: "red" }}>{formik.errors?.password}</p>
          </div>
      

          <div>
            {/* <button type="submit">Submit</button> */}
            <input type="submit" value="Submit" style={{ padding: "10px 50px", border: "none", color: "white", backgroundColor: "green", borderRadius: 5 ,margin:"20px auto" ,display:"block",cursor:"pointer"}} />
          </div>
        </>
      </form>
      <div>
       <p>If you haven't account : <Link to="/register" style={{color:"gray"}}> Create Account</Link></p>  
      </div>
    </div>
    </div>
  )
}

export default Login