import React, { useEffect, useState } from 'react'
import '../../assets/css/Header.css'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../../assets'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavAndTheme } from '../../context';

function Header() {
    let navItems = [
        {
            name: 'Home',
            link: '/',
        } ,
        {
            name: 'About',
            link: '/about',
        } ,
        {
            name: 'Skills',
            link: '/skills',
        } ,
        {
            name: 'Experience',
            link: '/expirence',
        } ,
        {
            name: 'Contact',
            link: '/contact',
        } 
    ]

    let {showNav , toggleNav} = useNavAndTheme()
    let location = useLocation()

    useEffect(() => {
        if(showNav){
            toggleNav()
        }
    },[location.pathname])

  return (
    <header>
        <div className="headerDiv">
            <div className='nameDiv'>
                <img src = {Logo} alt="Logo image" />
                <p><span>p</span>urushothaman .</p>
            </div>
            <div className={`navLinks ${(showNav)?'showNavLinks':'hideNavLinks'}`}>
                <ul>
                    {
                        navItems.map(({name , link} , index)=>(
                            <li key={index}>
                                <Link to={link}>{name}</Link>
                            </li>
                        ) )
                    }
                </ul>
            </div>
            <div className={`menuBar ${(showNav)?'menuBarShow':'menuBarHide'}`} onClick={toggleNav}>
            {(showNav) ?  <IoClose size={30} /> : <GiHamburgerMenu size={20} /> }
            </div>
        </div>
    </header>
  )
}

export default Header