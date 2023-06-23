import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { ClickAwayListener } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from './assets/Black and Beige Grunge Graffiti Creative Studio Logo.png'
export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [show, handleShow] = useState(false);

  const handleNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleClickAway = () => {
    setShowNavbar(false)
  }

  const transition = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transition)
    return () =>
      window.removeEventListener('scroll', transition)
  }, [])

  // let btnClassName = Array.from(document.getElementsByClassName('home-button'))

  // btnClassName.forEach(btn => {
  //   btn.addEventListener('click', handleNavbar);
  // });


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={`navbar ${show && 'navbar-black'}`}>
        <Link to='/' onClick={() => setShowNavbar(false)}><img src={logo} className='logo' /> </Link>
        <ul className={showNavbar ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/' className="home-button">Home</Link></li>
        </ul>
        <div className='hamburger-container'>
          <div className='hamburger' onClick={handleNavbar}>
          {/* <Link to='/'><img src={logo} className='logo-media' /></Link> */}
            {showNavbar ? (<CloseIcon fontSize='large' className='icon' />) : (<MenuIcon fontSize='large' className='icon' />)}
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

