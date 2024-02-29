import React from 'react'

import './header-styles.css';
import List from '../List/List.jsx';


const Header = () => {

  return (
    <div className="heading">
        <h1>Tour Trouve</h1>

      <div className="nav-bar">
        <a href="#">Explore</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>

    </div>


  )
}

export default Header;