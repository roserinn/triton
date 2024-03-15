// import React from 'react'
import './Header.scss';
//  import Logo from '../../../assets/img/icons/logo/png';


const Header = () => {
  return (
    <div className="header">
         <div className="header__cont">
          <div className="header__logo">
            {/* {Logo} */}
          </div>
          <nav className="header__nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Client Success</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
         </div>
    </div>
  )
}

export default Header;