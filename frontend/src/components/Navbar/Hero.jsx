import React from 'react'
import assets from '../../assets/header_img.jpg'
import './Hero.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='Hero'>
      <div></div>

      <div className='Hero-contents'>
        <h2>
          Where You Meet Greek Luxury
        </h2>
        <h1>Greco Restaurant</h1>
        <button class= "btnLogin-popup"   onClick={() => {
    const element = document.getElementById("reservation-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }} >BOOK A TABLE</button>
      </div>
    </div>
  )
}

export default Hero