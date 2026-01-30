import React from 'react';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import { useState } from 'react';
import FoodDisplay from '../components/FoodDisplay';
import AppDownload from '../components/AppDownload';

const HomePage = () => {

const[category, setCategory] = useState("All");
    return (

     <>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload />
     </>
    );
}

export default HomePage;
