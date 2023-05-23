import React from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../Components/AdminSideBar/AdminSidebar'
import './dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <AdminSidebar/>
     <h2>Dashboard</h2>
      </div>
  )
}

export default Dashboard