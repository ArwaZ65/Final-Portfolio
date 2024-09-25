import React from 'react'
import './Header.css'
import profile from '../../assets/me2.jpg'
const Header = () => {
  return (
    <div>
      <div className="header" id='home'>
        <img src={profile} alt="my-photo" />
        <h1><span>I'm Arwa Zakria,</span> frontend developer based in Egypt.</h1>
        <p>Passionate frontend developer with a focus on crafting responsive and user-friendly websites. Currently completing my computer science degree and looking forward to contributing to web development projects</p>
        <div className="actions">
        <div className="header-connect"><button type='button'>Connect With Me</button></div>
        <div className="header-resume"><button type='button'>Resume</button></div>
        </div>
      </div>
    </div>
  )
}

export default Header;
