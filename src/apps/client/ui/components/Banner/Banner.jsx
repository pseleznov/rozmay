import React from 'react';
import cross from './img/cross.png';

import './Banner.css';

const Banner = (props) => {
    const {
        activeProduct, 
        setActiveProduct,
        phone,
        phoneText,
        textBelow,
        selectedProduct
    } = props;
    return (
        <div className='bannerWrap'>
            <div className='bannerContent'>
                {
                    activeProduct.article && 
                        <div className='bannerPopup'>
                            <div 
                                className='bannerPopup_cross'
                                onClick={() => setActiveProduct({})}
                            >
                                <img src={cross} alt="cross"/>
                            </div>
                            <div className='bannerPopup_text'>
                                {selectedProduct}
                            </div>
                            <div className='bannerPopup_article'>
                                {activeProduct.article}
                            </div>
                        </div>
                }
                <div className='bannerPhoneWrap'>
                    <div className='bannerPhoneText'>
                        {phoneText}
                    </div>
                    <div className='bannerPhone'>
                        {phone}
                    </div>
                </div>
                <div className='bannerText'>
                    {textBelow}
                </div>
            </div>
        </div>
    );
}

export default Banner;
