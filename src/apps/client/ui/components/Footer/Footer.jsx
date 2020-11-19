import React from 'react';
import { useSelector } from 'react-redux';
import footerBg from './img/background.png';
import mobileBg from './img/mobileBg.png';

import './Footer.css'

const Footer = () => {
    const langMap = useSelector(({ application }) => application.langMap);
    const { contacts } = langMap.footer;
    const { address, phone, email } = contacts;

    return (
        <div className='footerContainer'>
            <div className='footerBackgroundWrap'>
                <img className='footerBackgroundWrap_bigImg' src={footerBg} alt="bg"/>
                <img className='footerBackgroundWrap_mobileImg' src={mobileBg} alt="bg"/>
            </div>
            <div className='footerContentContainer'>
                <div className='footerItem'>
                    <div className='footerItem_name'>{address.title}</div>
                    <div className='footerItem_content'>{address.value}</div>
                </div>
                <div className='footerItem'>
                    <div className='footerItem_name'>{phone.title}</div>
                    <div className='footerItem_content'>{phone.value}</div>
                </div>
                <div className='footerItem'>
                    <div className='footerItem_name'>{email.title}</div>
                    <div className='footerItem_content'>{email.value}</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;