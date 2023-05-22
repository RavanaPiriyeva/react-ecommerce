import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSideBar/AdminSidebar";
import Navbar from "./Navbar/Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      {/* <AdminSidebar/> */}
      {children}
    </div>
  );
};

export default Layout;
