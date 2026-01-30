import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer__content">
        <div className="footer__content__left">
          <img src={assets.logo} alt="" className="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem velit consequatur sunt ratione maiores, minima rerum
            officiis repudiandae possimus voluptatibus fugit, veritatis
            distinctio nihil corporis repellat tempora quibusdam inventore!
            Provident?
          </p>
          <div className="footer__social__icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer__content__center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer__content__right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>210.533-1234</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer__copyright">
        Copyright © 2026 Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
