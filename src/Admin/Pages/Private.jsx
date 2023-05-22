import React from "react";
import Products from "../../Pages/Products/Products";
import { Route, Routes } from "react-router-dom";
import Layout from "../../Components/Layout";
import Basket from "../../Pages/Basket/Basket";
import AdminProduct from "../../Pages/AdminProduct/AdminProduct";
import { Notfound } from "../../Pages/NotFound/Notfound";
import Dashboard from "../../Pages/Dashboard/Dashboard";
const Private = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<AdminProduct />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Layout>
  );
};

export default Private;
