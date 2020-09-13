import React from 'react';

import './Banner.css';

const Banner = () => {
    return (
        <div className='bannerWrap'>
            <div className='bannerContent'>
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
