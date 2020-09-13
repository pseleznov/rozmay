import React from 'react';
import flower from './img/kvitochka.png';

import './FlowerDivider.css';

const flowerDivider = () => {
    return (
        <div className='homescreenContent_divider'>
            <div className='homescreenContent_flowersBox'>
                <div className='homescreenContent_flowerWrap'>
                    <img src={flower} alt="flower"/>
                </div>
                <div className='homescreenContent_flowerWrap'>
                    <img src={flower} alt="flower"/>
                </div>
                <div className='homescreenContent_flowerWrap'>
                    <img src={flower} alt="flower"/>
                </div>
            </div>
        </div>
    );
}

export default flowerDivider;