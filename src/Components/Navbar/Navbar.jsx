import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import 'animate.css';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0"; // Open the menu
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-600px"; // Hide the menu
  };

  return (
    <div className='navbar animate__animated animate__bounce'>
      <img className='logo' src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt="menu open" className='menu_open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="menu close" className="menu_close" />
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#works">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect">
        <button type='button'><a href="#contact">Connect With Me</a></button>
      </div>
    </div>
  );
};

export default Navbar;
