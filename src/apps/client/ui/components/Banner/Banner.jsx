import React from 'react';
import cross from './img/cross.png';

import './Banner.css';

const Banner = ({ activeProduct, setActiveProduct }) => {
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
                                код товару, що вам сподобався
                            </div>
                            <div className='bannerPopup_article'>
                                {activeProduct.article}
                            </div>
                        </div>
                }
                <div className='bannerPhoneWrap'>
                    <div className='bannerPhoneText'>
                        Для замовлення телефонуйте за номером:
                    </div>
                    <div className='bannerPhone'>
                        +380-98-7654-321
                    </div>
                </div>
                <div className='bannerText'>
                    Ми чекаємо на Ваші дзвінки з 9:00 до 18:00 з понеділка по п’ятницю
                </div>
            </div>
        </div>
    );
}

export default Banner;
