import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <p>For a Better Experience Download <br/> Greco Restaurant App</p>
      <div className="footer-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Footer