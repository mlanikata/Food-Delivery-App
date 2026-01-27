
import React, { useState } from 'react';
import NavLogo from '../assets/logo.png';
import SearchIcon from '../assets/search_icon.png';
import BasketIcon from '../assets/basket_icon.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menu, setMenu] = useState('home');

  return (
    
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__img__wrapper">
            <img src={NavLogo} alt="" className="nav__img" />
          </Link>

          <div className="nav__links">
            <Link to="/" 
            onClick={() => setMenu("home")}
            className={menu === "home" ? "nav__link active" : "nav__link"}>
              home
            </Link>

            <Link to="/menu" 
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "nav__link active" : "nav__link"}>
              menu
            </Link>

            <Link to="/app" 
            onClick={() => setMenu("app")}
           className={menu === "app" ? "nav__link active" : "nav__link"}>
              mobile app
            </Link>

            <Link to="/contact" 
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "nav__link active" : "nav__link"}>
              contact us
            </Link>

          </div>
          <div className="nav__right">
            <img src={SearchIcon} alt="" className="search__img right__icons" />
            <div className="basket__wrapper">
            <img src={BasketIcon} alt="" className="basket__img right__icons" />
            <div className="dot"></div>
            </div>
            <button className="nav__btns__sign__in">sign in</button>
          </div>
        </div>
      </nav>

      
    
  );
};

export default Nav;
