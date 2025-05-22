import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoMdAddCircleOutline, IoIosLogOut } from 'react-icons/io'
import { MdFormatListBulleted } from "react-icons/md"
import { PiListBulletsFill } from "react-icons/pi"
import "./Sidebar.css"

const Sidebar = ({ setToken }) => {
  const navigate = useNavigate() // It purpose is to guide/Pilot in an another Route

  // Here it signs out the User and it sets/removes the token
  const handleLogout = () => {
    setToken('')                  
    localStorage.removeItem('token') 
    navigate('/')                
  }

  // is the Admin panel Field where each side button show it's own page for the admin to edit the info of the Site
  return (
    <div className='Sidebar'>
      <div className='Sidebar-side'>
        <h2 className='title'>Greco Restaurant - Panel</h2>
      </div>
      <div className='Menu'>
        <NavLink className="NavLink" to="/add" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          <IoMdAddCircleOutline className='Icon'/>
          <p className='Line'>Add Menu</p>
        </NavLink>

        <NavLink className="NavLink" to="/list" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          <MdFormatListBulleted className='Icon'/>
          <p className='Line'>Menu List</p>
        </NavLink>

        <NavLink className="NavLink" to="/table" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          <PiListBulletsFill className='Icon'/>
          <p className='Line'>Reservations</p>
        </NavLink>

        <button className="Button" onClick={handleLogout} style={{ cursor: 'pointer', marginTop: '20px' }}>
          <IoIosLogOut className='Icon'/>
          <p className='Line'>Log Out</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar