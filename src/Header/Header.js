import React from 'react'

import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header id="main-header">
      <div className="header-nav">
        <Navigation></Navigation>
        <div className="header-content is-center">
          <h2 className="m-heading">WELCOME TO LA BUFADORA BAJA GRILL</h2>
          <p className="lead">Authentic Baja Taste</p>
        </div>
      </div>
    </header>
  )
}

export default Header
