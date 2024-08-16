import React from 'react'
import './header.css'
const Header = () => {


  return (
    <div className='container'>
        <div className='logo'>QUICK GARAGE</div>
        <div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
