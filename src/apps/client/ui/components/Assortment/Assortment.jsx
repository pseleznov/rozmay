import React from 'react';
import FlowerDivider from '../FlowerDivider/FlowerDivider';
import ProductDescription from '../ProductDescription/ProductDescription';

import './Assortment.css';

const Assortment = ({ assortment }) => {
    return (
        <div className='assortmentContainer'>
            {
                assortment.map((item, index) => 
                    <div className='assortmentProductDescriptionWrap' key={index}>
                        <ProductDescription 
                            {...item}
                        />
                        <FlowerDivider />
                    </div>
                )
            }
        </div>
    );
}

export default Assortment;