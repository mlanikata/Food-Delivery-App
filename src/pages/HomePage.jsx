import React from 'react';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import { useState } from 'react';

const HomePage = () => {

const[category, setCategory] = useState("All");
    return (

     <>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
     </>
    );
}

export default HomePage;
