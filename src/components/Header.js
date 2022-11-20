import React from 'react';
import '../App.css';
import './Header.css';

function Header () {
  return (
    <div className="Header">  
      <div className="Wrapper">
        <p className="Header-Title">Конвертер валют</p>
        <div className="Header-lang">
          <p>RUS</p>
          <p>ENG</p>
          <p>DE</p>
        </div>
      </div>
    </div>
  )
}

export default Header;
