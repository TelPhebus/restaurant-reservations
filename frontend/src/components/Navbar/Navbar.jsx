import React, { useState, useContext } from 'react'
import './Navbar.css'
import assets from '../../assets/assets'
import { ShopContext } from '../../context/ShopContext'

const Navbar = ({ setShowLogin }) => {
  // Access token and token setter from global context
  const { token, setToken } = useContext(ShopContext)
  // State to manage which menu is active
  const [menu, setMenu] = useState("home")
// State to control dropdown visibility for the logged-in user's profile menu
  const [dropdownOpen, setDropdownOpen] = useState(false)
  

  const handleLogout = () => {
    setToken("")
    localStorage.removeItem('token')  // -------> Removes the token from browser's local storage
    setDropdownOpen(false)
  }
              
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Contact</li>
      </ul>
      <div className="navbar-right">
        {!token ? (
          // If user is not logged in, show Sign In button
          <button onClick={() => setShowLogin(true)} className="btnLogin-popup">sign in</button>
        ) : (
          // If user is logged in, show profile icon and dropdown menu
          <div className='navbar-profile' onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={assets.profile_icon} alt="User Profile" />
            {dropdownOpen && (
              <ul className="nav-profile-dropdown">
                <li onClick={handleLogout}>
                  <img src={assets.logout_icon} alt="Logout" /> Logout
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar