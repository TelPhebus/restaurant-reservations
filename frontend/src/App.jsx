import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Navbar/Hero"
import MenuDisplay from './components/Navbar/MenuDisplay'
import ReservationForm from './components/Navbar/ReservationForm'
import Footer from './components/Navbar/Footer'
import LoginPopup from './components/Navbar/LoginPopup/LoginPopup'

const App = () => {
   // State to control whether the login popup is visible or not

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    
    {/* Conditionally render all the component in the Web */}
    <div className='app'>
        
      <Navbar setShowLogin={setShowLogin} />
      <Hero/>
      <MenuDisplay/>
      <ReservationForm/>
      <Footer/>
    </div>
    </>
  )
}

export default App