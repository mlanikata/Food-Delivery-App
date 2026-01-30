
import React, { useContext, useState } from 'react';
import NavLogo from '../assets/logo.png';
import SearchIcon from '../assets/search_icon.png';
import BasketIcon from '../assets/basket_icon.png';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Nav = ({setShowLogin}) => {
  const [menu, setMenu] = useState('menu');

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    
      <nav>
        <div className="nav__container">
          <div className="nav__img__wrapper">
            <Link to="/"><img src={NavLogo} alt="" className="nav__img" /></Link>
          </div>

          <div className="nav__links">
            <Link to="/" 
            onClick={() => setMenu("home")}
            className={menu === "home" ? "nav__link active" : "nav__link"}>
              home
            </Link>

            <a href='#explore__menu'
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "nav__link active" : "nav__link"}>
              menu
            </a>

            <a href='#app__download'
            onClick={() => setMenu("app")}
           className={menu === "app" ? "nav__link active" : "nav__link"}>
              mobile app
            </a>

            <a href='#footer'
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "nav__link active" : "nav__link"}>
              contact us
            </a>

          </div>
          <div className="nav__right">
            <img src={SearchIcon} alt="" className="search__img right__icons" />
            <div className="basket__wrapper">
            <Link to="/cart"> <img src={BasketIcon} alt="" className="basket__img right__icons" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} className="nav__btns__sign__in">sign in</button>
          </div>
        </div>
      </nav>

      
    
  );
};

export default Nav;
