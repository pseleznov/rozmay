import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import FlowerDivider from '../FlowerDivider/FlowerDivider';
import PopupProductForm from '../PopupProductForm/PopupProductForm';
import setActiveProduct from '../../../actions/setActiveProduct';

import './MainContent.css';

class MainContent extends Component {
    imgRefs = this.props.products.map(() => React.createRef());

    state = {
        activeProduct: {},
        isHorizontalPicture: {}
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.products !== nextProps.products) {
            this.imgRefs = nextProps.products.map(() => React.createRef());
        }
    }

    handleDetailsClick = (activeProduct) => () => {
        this.props.togglePopup(true);
        this.setState({
            activeProduct
        });
    };

    handleOrderClick = (activeProduct) => () => {
        this.props.togglePopup(false);
        this.props.setActiveProduct(activeProduct);
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    };

    divideIntoOne = (products) => {
        const newProductsArray = [];
        for (let i = 0; i < products.length; i++) {
            const tempArray = products.slice(i, i + 1);
            newProductsArray.push(tempArray);
        }
        return newProductsArray;
    };

    divideIntoTwo = (products) => {
        const newProductsArray = [];
        for (let i = 0; i < products.length; i = i + 2) {
            const tempArray = products.slice(i, i + 2);
            newProductsArray.push(tempArray);
        }
        return newProductsArray;
    };

    divideIntoThree = (products) => {
        const newProductsArray = [];
        for (let i = 0; i < products.length; i = i + 3) {
            const tempArray = products.slice(i, i + 3);
            newProductsArray.push(tempArray);
        }
        return newProductsArray;
    };

    checkImgProperties = (index) => {
        const pictureWidth = this.imgRefs[index].current.naturalWidth;
        const pictureHeight = this.imgRefs[index].current.naturalHeight

        this.setState({
            isHorizontalPicture: {
                ...this.state.isHorizontalPicture,
                [index]: pictureWidth > pictureHeight
            }
        });
    };

    createProductContainer = (productRow, productText) => {
        const { isHorizontalPicture } = this.state;
        return productRow.map((product, i) => {
            return (
                <div className='product' key={i}>
                    <div className='product_img_container'>
                        <img 
                            className={classNames('product_img', {
                                'product_img_horizontal': isHorizontalPicture[product.id - 1]
                            })} 
                            src={product.photo[0]} 
                            alt="product"
                            ref={this.imgRefs[product.id - 1]}
                            onLoad={() => this.checkImgProperties(product.id - 1)}
                        />
                    </div>
                    <div className='product_buttonsContainer'>
                        <div
                            className='product_link productOrder'
                            onClick={this.handleOrderClick(product)}
                        >
                            {productText.order}
                        </div>
                        <div
                            className='product_link productDetails'
                            onClick={this.handleDetailsClick(product)}
                        >
                            {productText.details}
                        </div>
                    </div>
                    <div className='product_price'>
                        {
                            product.price === 9999
                                ? productText.negotiablePrice
                                : `${productText.pricePrev} ${product.price} UAH`
                        }
                    </div>
                    <div className='product_article'>артикул: {product.article}</div>
                </div>
            );
        });
    };

    render() {
        const { 
            isPopupProductShown,
            products,
            togglePopup,
            isBigDesktop,
            isTabletDesktop,
            productText,
            fabric
        } = this.props;
        const { activeProduct } = this.state;

        const splitProducts = isBigDesktop 
            ? this.divideIntoThree(products)
            : isTabletDesktop
                ? this.divideIntoTwo(products)
                : this.divideIntoOne(products);

        return (
            <div className='contentContainer'>
                {
                    isPopupProductShown && 
                        <PopupProductForm
                            togglePopup={togglePopup}
                            handleOrderClick={this.handleOrderClick}
                            activeProduct={activeProduct}
                            fabric={fabric}
                            productText={productText}
                        />
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
                                        {this.createProductContainer(productRow, productText)}
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

export default connect(null, { setActiveProduct })(MainContent);