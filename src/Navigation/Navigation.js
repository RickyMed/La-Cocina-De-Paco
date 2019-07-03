import React from 'react'

const Navigation = () => {
  return (
    <div id="main-navigation" className="p-2">
      <nav role="navigation">
        <h1><a href="/">La Bufadora</a></h1>
        <div className="burger-menu is-right">
          <label htmlFor="toggle">&#x2630;</label>
          <input id="toggle" type="checkbox"/>
          <ul className="is-left px-2">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#order-online">Order Online</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
