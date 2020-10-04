import React from 'react';
import { NavLink } from 'react-router-dom';
import flower from './img/flower.png';

import './NotFoundPage.css';

const NotFoundPage = (props) => {
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
                        Вибачте,
                    </div>
                    <div>
                        ми не можемо знайти сторінку,
                    </div>
                    <div>
                        яку Ви шукали
                    </div>
                </div>
            </div>
            <div className='notFoundPage_button'>
                <NavLink
                    to='/'
                    className='notFoundPage_buttonLink'
                >
                    Головна
                </NavLink>
            </div>
        </div>
    ); 
};

export default NotFoundPage;