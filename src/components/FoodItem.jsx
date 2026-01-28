import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems,addToCart,removeFromCart } = useContext(StoreContext);

  return (
    <div className="food__item">
      <div className="food__item__img__container">
        <img src={image} alt="" className="food__item__image" />
        {!cartItems[id] ? 
          <img
            className="add"
            onClick={()=>addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        : 
          <div className="food-item-counter">
            <img
              onClick={()=>removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={()=>addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        }
      </div>
      <div className="food__item__info">
        <div className="food__item__name__rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food__item__description">{description}</p>
        <p className="food__item__price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
