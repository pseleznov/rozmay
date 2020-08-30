import React from 'react';
import PopupProductForm from '../PopupProductForm/PopupProductForm';

import './MainContent.css';

const MainContent = (props) => {
    const { isPopupProductShown, products, togglePopup } = props;

    return (
        <div className='contentContainer'>
            {
                isPopupProductShown && <PopupProductForm togglePopup={togglePopup} />
            }
            <div className='content'>
                {products.map((item, i) => {
                    return (
                        <div className='product' key={i}>
                            <div className='product_img_container'>
                                <img className='product_img' src={item.photo} alt="product" />
                            </div>
                            <div className='product_price'>{item.price}</div>
                            <div className='product_article'>{item.article}</div>
                            <div 
                                className='product_link'
                                onClick={() => togglePopup(true)}
                            >
                                Детальніше 
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MainContent;