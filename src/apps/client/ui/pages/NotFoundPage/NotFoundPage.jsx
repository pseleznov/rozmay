import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import flower from './img/flower.png';

import './NotFoundPage.css';

const NotFoundPage = (props) => {
    const langMap = useSelector(({ application }) => application.langMap);
    const { notFoundPage: text } = langMap;

    return (
        <div className='notFoundPageContainer'>
            <div className='notFoundPageContent'>
                <div className='notFoundPageContent_error'>
                    <span>4</span>
                    <div className='notFoundPageContent_errorWrap'>
                        <img src={flower} alt="flower"/>
                    </div>
                    <span>4</span>
                </div>
                <div className='notFoundPageContent_text'>
                    <div>
                        {text.text1}
                    </div>
                    <div>
                        {text.text2}
                    </div>
                    <div>
                        {text.text3}
                    </div>
                </div>
            </div>
            <div className='notFoundPage_button'>
                <NavLink
                    to='/'
                    className='notFoundPage_buttonLink'
                >
                    {text.button}
                </NavLink>
            </div>
        </div>
    ); 
};

export default NotFoundPage;