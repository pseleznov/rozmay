import React, { Component } from 'react';
import classNames from 'classnames';
import leftArrow from './img/leftArrow.png';
import rightArrow from './img/rightArrow.png';

import './PopupProductForm.css';

class PopupProductForm extends Component {

    constructor (props) {
        super(props);

        this.slider = React.createRef();
        this.gallery = React.createRef();
    }

    state = {
        position: 0,
        photos: this.props.activeProduct.photo.length
    }

    handleArrowClick = (direction) => () => {
        const step = this.slider.current.offsetWidth;
        const gallery = this.gallery.current;
        const { position, photos } = this.state;

        if(direction === 'left') {
            let offset = position + step;
            offset = Math.min(offset, 0);
            gallery.style.marginLeft = `${offset}px`;
            this.setState({
                position: offset
            });
        }

        if(direction === 'right') {
            let offset = position - step;
            offset = Math.max(offset, - step * (photos - 1));
            gallery.style.marginLeft = `${offset}px`;
            this.setState({
                position: offset
            });
        }
    }

    render() {
        const { togglePopup, activeProduct } = this.props;
        const invisible = activeProduct.photo.length === 1;

        return (
            <div className='popupProductFormContainer'>
                <div
                    className='popupProductFormContainer_background'
                    onClick={() => togglePopup(false)}
                ></div>
                <div className='popupProductFormContainer_contentWrap'>
                    <svg id="cross" onClick={() => togglePopup(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249 234" fill="none" stroke="red" strokeWidth="20px">
                        <line className="cls-1" x1="43.5" y1="36" x2="205.5" y2="198" />
                        <line className="cls-1" x1="205.5" y1="36" x2="43.5" y2="198" />
                    </svg>
                    <div className='popupProductFormContainer_content'>
                        <div className='popupProductFormContainer_content_slider' ref={this.slider}>
                            <div 
                                className={classNames(
                                    'popupProductFormContainer_content_leftArrow', {
                                    'popupProductFormContainer_content_invisibleArrow': invisible
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
                                    'popupProductFormContainer_content_invisibleArrow': invisible
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
                        <div className='popupProductFormContainer_content_infoWrap'>
                            <div className='popupProductFormContainer_content_info'>
                                <div className='popupProductFormContainer_content_infoMateriales'>
                                    <div className='popupProductFormContainer_content_name'>
                                        тканини
                                    </div>
                                    <div className='popupProductFormContainer_content_value'>
                                        міх, льон, сілк
                                    </div>
                                </div>
                                <div className='popupProductFormContainer_content_infoPrice'>
                                    <div className='popupProductFormContainer_content_name'>
                                        ціна
                                    </div>
                                    <div className='popupProductFormContainer_content_value'>
                                        {activeProduct.price}
                                    </div>
                                </div>
                                <div className='popupProductFormContainer_content_infoArticle'>
                                    <div className='popupProductFormContainer_content_name'>
                                        код товару
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