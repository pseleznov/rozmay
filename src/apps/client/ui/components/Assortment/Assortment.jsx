import React from 'react';
import FlowerDivider from '../FlowerDivider/FlowerDivider';
import ProductDescription from '../ProductDescription/ProductDescription';

import './Assortment.css';

const Prod = [
    {
        title: 'Чоловічі сорочки'
    },
    {
        title: 'Жіночі блузки'
    },
    {
        title: 'Жіночі сукні'
    },
    {
        title: 'Жіночі блузки'
    },
    {
        title: 'Жіночі сукні'
    },
    {
        title: 'Сценічний одяг'
    }
];

const Assortment = () => {
    return (
        <div className='assortmentContainer'>
            {
                Prod.map((item, index) => 
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