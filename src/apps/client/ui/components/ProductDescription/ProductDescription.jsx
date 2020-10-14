import React from 'react';
import { NavLink } from 'react-router-dom';

import './ProductDescription.css';

const ProductDescription = ({ title, text1, text2, text3, link }) => {
    return (
        <div className='productDescriptionContainer'>
            <div className='productDescription_title'>
                <NavLink
                    to={link}
                    className='productDescription_title_link'
                >
                    {title}
                </NavLink>
            </div>
            <div className='productDescription_content'>
                <div>{text1}</div>
                <div>{text2}</div>
                {text3 && <div>{text3}</div>}
            </div>
        </div>
    );
}

export default ProductDescription;