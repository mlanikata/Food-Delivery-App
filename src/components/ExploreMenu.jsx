import React from 'react';
import { menu_list } from '../assets/assets';



const ExploreMenu = ({category,setCategory}) => {

    return (
        <div className='explore__menu' id='explore__menu'>
            <h1>Explore our menu</h1>
            <p className='explore__menu__text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="explore__menu__list">
                {menu_list.map((item, index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore__menu__list__item">
                            <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;
