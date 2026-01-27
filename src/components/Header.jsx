import React from 'react';
import HeaderBg from '../assets/header_img.png';

const Header = () => {
  return (
    <header>
      <div className="container container__header">
        <div className="header__row">
          <div className="header__text">
            <h1 className="header__text__title">
              Order your favorite food here
            </h1>
            <p className="header__text__para">
             Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time. 
            </p>
            <div className="header__text__btns">
              <button className="header__text__btn view__menu__btn">View Menu</button>
            </div>
          </div>
          <figure className="header__img__wrapper">
          <img src={HeaderBg} alt="" className='header__img' />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
