import React, { Component } from 'react';
import PopupProductForm from '../PopupProductForm/PopupProductForm';

import './MainContent.css';

class MainContent extends Component {
    state = {
        activeProduct: {}
    }

    handleClick = (activeProduct) => () => {
        this.props.togglePopup(true);
        this.setState({
            activeProduct
        });
    }

    render() {
        const { isPopupProductShown, products, togglePopup } = this.props;
        const { activeProduct } = this.state;

        return (
            <div className='contentContainer'>
                {
                    isPopupProductShown && <PopupProductForm togglePopup={togglePopup} activeProduct={activeProduct} />
                }
                <div className='content'>
                    {products.map((item, i) => {
                        return (
                            <div className='product' key={i}>
                                <div className='product_img_container'>
                                    <img className='product_img' src={item.photo[0]} alt="product" />
                                </div>
                                <div className='product_price'>{item.price}</div>
                                <div className='product_article'>артикул: {item.article}</div>
                                <div
                                    className='product_link'
                                    onClick={this.handleClick(item)}
                                >
                                    Детальніше
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

export default MainContent;