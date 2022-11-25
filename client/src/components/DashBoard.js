import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import FloatBar from './FloatBar'
import Tender from './Tender'

const DashBoard = () => {
  return (
    <div>
      <FloatBar />

      <Outlet />
    </div>
  )
}

export default DashBoard
