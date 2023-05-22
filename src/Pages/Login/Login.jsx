import React, { useContext, useState } from 'react'
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from './LoginContext';
const Login = () => {
  const { users,setUsers } = useContext(LoginContext);
  const [loginError, setLoginError] = useState('');
  let navigate =useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const user = users.find(
        (user) => user.email === values.email && user.password === values.password
      );

      if (user) {
        user.islogin=true
        setUsers([...users])
        navigate('/admin');

 
      } else {
        setLoginError('Invalid email or password');
      }


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
            {loginError && <div style={{ color: "red" }}>{loginError}</div>}
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