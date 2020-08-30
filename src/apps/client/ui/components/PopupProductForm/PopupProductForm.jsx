import React from 'react';
import './PopupProductForm.css';

const PopupProductForm = (props) => {
    const { togglePopup } = props;
   
    return (
        <div className='popupProductFormContainer'>
            <div 
                className='popupProductFormContainer_background'
                onClick={() => togglePopup(false)}
            ></div>
            <div className='popupProductFormContainer_content'>

            </div>
        </div>
    );
};

export default PopupProductForm;