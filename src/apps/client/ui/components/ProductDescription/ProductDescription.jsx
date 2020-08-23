import React from 'react';
import classNames from 'classnames'

import './ProductDescription.css';

const ProductDescription = (props) => {
    return (
        <div className={classNames(
            'productDescriptionContainer', {
            'productDescriptionContainer_right': props.position % 2
        })}>
            <div className='productDescription_title'>
                {props.title}
            </div>
            <div className='productDescription_content'>
                <div>
                    Ми маємо досвід у пошитті сценічних костюмів
                    для творчих колективів. І це не лише український стрій. Ми пропонуємо виготовлення костюмів
                    для різних напрямів вашої творчої діяльності.
                </div>
                <div>Звертайтесь!</div>
                <div><span className='logo_accent'>Rozmay</span> підкреслить вашу унікальність, неповторність, та допоможе у створенні чудового настрою у ваших шанувальників. </div>
            </div>
        </div>
    );
}

export default ProductDescription;