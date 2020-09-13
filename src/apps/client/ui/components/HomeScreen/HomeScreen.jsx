import React from 'react';
import flower from './img/kvitochka.png';

import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className='homescreenWrap'>
            <div className='homescreenContent'>
                <div className='homescreenContent_title'>
                    Одяг який <span className='accent green'>личить</span>, 
                    безперечно, <span className='accent green'>всім</span> – 
                    це наша <span className='accent red'>українська вишиванка</span>.
                </div>
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
                <div className='homescreenContent_textBlock'>
                    <div className='homescreenContent_text'>
                        Ошатна і щоразу неповторна, вона є ледь не в кожного українця.
                    </div>
                    <div className='homescreenContent_text'>
                        Це чудовий подарунок друзям, родичам і діловим партнерам.
                    </div>
                    <div className='homescreenContent_text'>
                        Це національний здобуток, яким ми пишаємось і з радістю ділимось з усім світом.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;
