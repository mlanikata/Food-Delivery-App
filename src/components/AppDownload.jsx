import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
    return (
        <div className='app__download' id='app__download'>
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className="app__download__platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
            
        </div>
    );
}

export default AppDownload;
