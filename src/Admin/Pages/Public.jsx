import React from 'react'
import Basket from '../../Pages/Basket/Basket'
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'
import { Route, Routes } from "react-router-dom";
import Layout from '../../Components/Layout';
import Products from '../../Pages/Products/Products';
import { Notfound } from '../../Pages/NotFound/Notfound';
const Public = () => {
    return (
        <Layout>
        <Routes>
          <Route path="/basket" element={<Basket />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Notfound />} />

        </Routes>
      </Layout>
    )
}

export default Public
