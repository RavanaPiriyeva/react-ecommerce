import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{padding:"100px 0",color:"black"}}><Link to="/admin/products" style={{color:"black"}}>Admin products</Link></div>
  )
}

export default Dashboard