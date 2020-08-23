import React from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';

import './Assortment.css';

const Prod = [
    {
        title: 'Чоловічі\nсорочки'
    },
    {
        title: 'Жіночі\nблузки'
    },
    {
        title: 'Жіночі\nсукні'
    },
    {
        title: 'Сценічний\nодяг'
    }
];

const Assortment = () => {
    return (
        <div className='assortmentContainer'>
            {
                Prod.map((item, index) => 
                    <ProductDescription 
                        {...item} 
                        position={index} 
                        key={index}
                    /> 
                )
            }
        </div>
    );
}

export default Assortment;