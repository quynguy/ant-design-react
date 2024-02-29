import React from 'react'

import './header-styles.css';


const Header = () => {

  return (
    <div className="header">
      <div className="heading">
        <h1>Tour Trouve</h1>
      </div>
    
      <nav className="nav-bar">
        <a href="#">Explore</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </nav>
    </div>

  )
}

export default Header;