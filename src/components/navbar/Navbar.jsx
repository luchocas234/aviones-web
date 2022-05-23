import React, { useState } from 'react'
import {FaBars, FaFacebook, FaInstagram, FaTimes} from 'react-icons/fa'
import {GiCarWheel} from 'react-icons/gi'
import {Link } from 'react-scroll'

import './NavbarStyles.css'

const Navbar = () => {
    const [nav,setNav]=useState(false)
    const [slide, setSlide] =useState(false)
    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }
    const handleClose = () => {
        setNav(!nav)
    }


  return (
    <div className='navbar'>
        <div className="container">
            <div className={slide? 'logo slide-right':'logo'}>
                <h3>Race.</h3>
            </div>

            <ul className={nav?'nav-menu active':'nav-menu'}>
            <li><a href="/"><Link onClick={handleClose} activeClass="active" to="power" spy={true} smooth={true} duration={500}>Power</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="speed" spy={true} smooth={true} duration={500}>Speed</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="handling" spy={true} smooth={true} duration={500}>Handling</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="options" spy={true} smooth={true} duration={500}>Options</Link></a></li>
                    <li><a href="/"><Link onClick={handleClose} activeClass="active" to="contact" spy={true} smooth={true} duration={500}>Contact</Link></a></li>

                
                <div className="mobile-menu">
                    <button>Shop</button>
                    <button>Account</button>
                    <div className="social-icons">
                        <FaFacebook className='icon'/>
                        <FaInstagram className='icon'/>
                        <GiCarWheel className='icon'/>

                    </div>
                </div>
            </ul>
            <ul className="nav-menu hide">
                <li><a href="/">Shop</a></li>
                <li><a href="/">Account</a></li>
            </ul>
            <div className="hamburger" onClick={()=>handleNav()}>
                {nav? <FaTimes className="icon"/>:<FaBars className='icon'/> }
            </div>

        </div>
    </div>
  )
}

export default Navbar