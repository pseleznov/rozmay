import React, { Component } from 'react';
import classNames from 'classnames';
import FlowerDivider from '../FlowerDivider/FlowerDivider';
import PopupProductForm from '../PopupProductForm/PopupProductForm';

import './MainContent.css';

class MainContent extends Component {
    state = {
        activeProduct: {}
    }

    handleDetailsClick = (activeProduct) => () => {
        this.props.togglePopup(true);
        this.setState({
            activeProduct
        });
    }

    handleOrderClick = (activeProduct) => () => {
        this.props.togglePopup(false);
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    divideIntoTwo = (products) => {
        const newProductsArray = [];
        for (let i = 0; i < products.length; i = i + 2) {
            const tempArray = products.slice(i, i + 2);
            newProductsArray.push(tempArray);
        }
        return newProductsArray;
    }

    divideIntoThree = (products) => {
        const newProductsArray = [];
        for (let i = 0; i < products.length; i = i + 3) {
            const tempArray = products.slice(i, i + 3);
            newProductsArray.push(tempArray);
        }
        return newProductsArray;
    }

    createProductContainer = (productRow) => {
        return productRow.filter(Boolean).map((product, i) => {
            return (
                <div className='product' key={i}>
                    <div className='product_img_container'>
                        <img className='product_img' src={product.photo[0]} alt="product" />
                    </div>
                    <div className='product_buttonsContainer'>
                        <div
                            className='product_link productOrder'
                            onClick={this.handleOrderClick(product)}
                        >
                            Замовити
                        </div>
                        <div
                            className='product_link productDetails'
                            onClick={this.handleDetailsClick(product)}
                        >
                            Детальніше
                        </div>
                    </div>
                    <div className='product_price'>від {product.price} UAH</div>
                    <div className='product_article'>артикул: {product.article}</div>
                </div>
            );
        });
    }

    render() {
        const { isPopupProductShown, products, togglePopup, isBigDesktop } = this.props;
        const { activeProduct } = this.state;

        const splitProducts = isBigDesktop 
            ? this.divideIntoThree(products)
            : this.divideIntoTwo(products);

        return (
            <div className='contentContainer'>
                {
                    isPopupProductShown && <PopupProductForm togglePopup={togglePopup} activeProduct={activeProduct} />
                }
                <div className='content'>
                    {
                        splitProducts.map((productRow, i) => {
                            return (
                                <div className='productsRow' key={i}>
                                    <FlowerDivider />
                                    <div className={classNames('products_container', {
                                        'products_container_lastLine': productRow.length < 3
                                    })}>
                                        {this.createProductContainer(productRow)}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};

export default MainContent;