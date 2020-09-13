import React from 'react';
import footerBg from './img/background.png';

import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerBackgroundWrap'>
                <img src={footerBg} alt="bg"/>
            </div>
            <div className='footerContentContainer'>
                <div className='footerItem'>
                    <div className='footerItem_name'>Наша адреса:</div>
                    <div className='footerItem_content'>05440, м.Луцьк вул. Червона 3</div>
                </div>
                <div className='footerItem'>
                    <div className='footerItem_name'>Телефон:</div>
                    <div className='footerItem_content'>098-765-43-21</div>
                </div>
                <div className='footerItem'>
                    <div className='footerItem_name'>Електронна адреса:</div>
                    <div className='footerItem_content'>Rozmay@gmail.com</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;