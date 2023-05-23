import React from 'react'
import { Link } from 'react-router-dom'
import './AdminSidebar.css'
const AdminSidebar = () => {
  return (
    <div className='sidebar'>
      <Link to="/admin" >Dashboard</Link>
      <Link to="/admin/products" >Admin products</Link>
      <Link to="/admin/orders" >Admin orders</Link>
    </div>
  )
}

export default AdminSidebar