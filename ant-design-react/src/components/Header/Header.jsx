import React from 'react'

import './header-styles.css';
import List from '../List/List.jsx';


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

      <main className="explore-container">
        <div className="explore-right"></div>
        <List />
        <div className="explore-left"></div>
      </main>
    </div>

  )
}

export default Header;