import React from 'react'
import Products from '../../Pages/Products/Products'
import { Route, Routes } from "react-router-dom";
import Layout from '../../Components/Layout';
import Basket from '../../Pages/Basket/Basket';
import AdminProduct from '../../Pages/AdminProduct/AdminProduct';
const Private = () => {
    return (
        <Layout>
        <Routes>
        <Route path="/" element={<AdminProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/basket" element={<Basket />} />

        </Routes>
      </Layout>
    )
}

export default Private
