import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="main-footer">
      <div className="footer-nav p-1">
        <nav role="navigation">
          <ul className="">
            <Link to="/catering"><li>Catering</li></Link>
            <Link to="/rewards"><li>Rewards</li></Link>
            <Link to="/careers"><li>Careers</li></Link>
          </ul>
        </nav>
      </div>
      <hr/>
      <div className="footer-content is-center">
        <p className="s-lead">Copyright &copy; 2023, La Cocina De Paco, All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
