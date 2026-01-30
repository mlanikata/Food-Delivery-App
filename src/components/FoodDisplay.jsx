import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreContext)
    
    console.log(food_list); 

    return (
        <div className="food__display" id='food__display'>
            <h2>Top dishes near you</h2>
            <div className="food__display__list">
                {food_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                })}
            </div>

        </div>
    );
}

export default FoodDisplay;
