import React from 'react';
import './MainContent.css';

const MainContent = (props) => {
    return (
        <div className='contentContainer'>
            <div className='content'>
                {props.products.map((item, i) => {
                    return (
                        <div className='product' key={i}>
                            <div className='product_img_container'>
                                <img className='product_img' src={item.photo} alt="product" />
                            </div>
                            <div className='product_price'>{item.price}</div>
                            <div className='product_article'>{item.article}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MainContent;