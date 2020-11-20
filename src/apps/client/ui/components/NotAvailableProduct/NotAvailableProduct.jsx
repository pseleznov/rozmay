import React from 'react';
import { useSelector } from 'react-redux';
import FlowerDivider from '../FlowerDivider/FlowerDivider';

import './NotAvailableProduct.css';

const NotAvailableProduct = () => {
    const langMap = useSelector(({ application }) => application.langMap);
    const { notAvailableProduct } = langMap.mainPage;

    return (
        <div className='notAvailableProductWrap'>
            <FlowerDivider />
            <div className='notAvailableProduct'>
                {notAvailableProduct.text}
            </div>
        </div>
    );
}

export default NotAvailableProduct;
