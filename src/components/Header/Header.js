import React from 'react';
import {NavLink} from 'react-router-dom'

import './Header.css';

const Header = () => {
  return (
    <div className="NavBar">
      <div className="Container">
        <p className="Logo"/>
        <NavLink className="Menu" to="/">Home</NavLink>
        <NavLink className="Menu" to="/about">About</NavLink>
      </div>
    </div>

  )
};

export default Header;