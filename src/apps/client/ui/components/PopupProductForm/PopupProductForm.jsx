import React, { Component } from 'react';
import classNames from 'classnames';
import leftArrow from './img/leftArrow.png';
import rightArrow from './img/rightArrow.png';
import flower from '../FlowerDivider/img/kvitochka.png';
import cross from './img/cross.png';

import './PopupProductForm.css';

class PopupProductForm extends Component {

    constructor (props) {
        super(props);

        this.slider = React.createRef();
        this.gallery = React.createRef();
    }

    state = {
        position: 0,
        photos: this.props.activeProduct.photo.length,
        leftArrowVisible: false,
        rightArrowVisible: true
    }

    handleArrowClick = (direction) => () => {
        const step = this.slider.current.offsetWidth;
        const gallery = this.gallery.current;
        const { position, photos } = this.state;

        if(direction === 'left') {
            let offset = position + step;
            offset = Math.min(offset, 0);
            gallery.style.marginLeft = `${offset}px`;
            const index = - offset / step;
            this.checkArrowsVisibility(index);

            this.setState({
                position: offset
            });
        }

        if(direction === 'right') {
            let offset = position - step;
            offset = Math.max(offset, - step * (photos - 1));
            gallery.style.marginLeft = `${offset}px`;
            const index = - offset / step;
            this.checkArrowsVisibility(index);

            this.setState({
                position: offset
            });
        }
    }

    checkArrowsVisibility = index => {
        this.checkLeftArrowVisibility(index);
        this.checkRightArrowVisibility(index);
    }

    checkLeftArrowVisibility = index => {
        this.setState({
            leftArrowVisible: index !== 0
        });
    }

    checkRightArrowVisibility = index => {
        this.setState({
            rightArrowVisible: index !== this.state.photos - 1
        });
    }

    onOrderClick = (activeProduct) => () => {
        this.props.handleOrderClick(activeProduct)();
    }

    render() {
        const { togglePopup, activeProduct, productText } = this.props;
        const { leftArrowVisible, rightArrowVisible } = this.state;
        const invisible = activeProduct.photo.length === 1;

        return (
            <div className='popupProductFormContainer'>
                <div
                    className='popupProductFormContainer_background'
                    onClick={() => togglePopup(false)}
                />
                <div className='popupProductFormContainer_contentWrap'>
                    <div className='popupProductForm_cross' onClick={() => togglePopup(false)}>
                        <img src={cross} alt="cross"/>
                    </div>
                    <div className='popupProductForm_orderButton' onClick={this.onOrderClick(activeProduct)}>
                        {productText.order}
                    </div>
                    <div className='popupProductFormContainer_content'>
                        <div className='popupProductFormContainer_content_slider' ref={this.slider}>
                            <div 
                                className={classNames(
                                    'popupProductFormContainer_content_leftArrow', {
                                    'popupProductFormContainer_content_invisibleArrow': invisible || !leftArrowVisible
                                })}
                                onClick={this.handleArrowClick('left')}
                            >
                                <img 
                                    className='popupProductFormContainer_arrowPhoto'
                                    src={leftArrow} 
                                    alt="left" 
                                />
                            </div>
                            <div className='popupProductFormContainer_content_gallery' ref={this.gallery}>
                                {
                                    activeProduct.photo.map((item, i) => {
                                        return (
                                            <div className='popupProductFormContainer_content_galleryElement' key={i}>
                                                <img 
                                                    className='popupProductFormContainer_content_galleryPhoto'
                                                    src={item} 
                                                    alt="bigPhoto"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div 
                                className={classNames(
                                    'popupProductFormContainer_content_rightArrow', {
                                    'popupProductFormContainer_content_invisibleArrow': invisible || !rightArrowVisible
                                })}
                                onClick={this.handleArrowClick('right')}
                            >
                                <img 
                                    className='popupProductFormContainer_arrowPhoto'
                                    src={rightArrow} 
                                    alt="right"
                                />
                            </div>
                        </div>
                        <div className='popupProductForm_divider'>
                            <div className='popupProductForm_flowersBox'>
                                <div className='popupProductForm_flowerWrap'>
                                    <img src={flower} alt="flower"/>
                                </div>
                                <div className='popupProductForm_flowerWrap'>
                                    <img src={flower} alt="flower"/>
                                </div>
                                <div className='popupProductForm_flowerWrap'>
                                    <img src={flower} alt="flower"/>
                                </div>
                            </div>
                        </div>
                        <div className='popupProductFormContainer_content_infoWrap'>
                            <div className='popupProductFormContainer_content_info'>
                                <div className='popupProductFormContainer_content_infoMateriales'>
                                    <div className='popupProductFormContainer_content_name'>
                                        {productText.fabric}
                                    </div>
                                    <div className='popupProductFormContainer_content_value'>
                                        льон
                                    </div>
                                </div>
                                <div className='popupProductFormContainer_content_infoPrice'>
                                    <div className='popupProductFormContainer_content_name'>
                                        {productText.productPrice}
                                    </div>
                                    <div className='popupProductFormContainer_content_value'>
                                        {
                                            activeProduct.price === 9999
                                                ? productText.negotiablePrice
                                                : `${productText.pricePrev} ${activeProduct.price} UAH`
                                        }
                                    </div>
                                </div>
                                <div className='popupProductFormContainer_content_infoArticle'>
                                    <div className='popupProductFormContainer_content_name'>
                                        {productText.productCode}
                                    </div>
                                    <div className='popupProductFormContainer_content_value'>
                                        {activeProduct.article}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default PopupProductForm;