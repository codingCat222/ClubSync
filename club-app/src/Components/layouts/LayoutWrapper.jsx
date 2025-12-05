// src/components/layout/LayoutWrapper.jsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import './LayoutWrapper.css'

function LayoutWrapper() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const token = localStorage.getItem('token')

  if (!token) {
    return <Outlet />
  }

  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="layout-content">
        <Navbar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default LayoutWrapper