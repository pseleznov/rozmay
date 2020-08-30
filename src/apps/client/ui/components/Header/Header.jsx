import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import setLang from '../../../actions/setLang';

import './Header.css';

const Header = () => {
    const langMap = useSelector(({ application }) => application.langMap);
    const { main, about } = langMap.header.menu;
    const dispatch = useDispatch();

    return (
        <div className='headerContainer'>
            <div className='headerContentContainer'>
                <div className='headerTop_menu'>
                    <NavLink
                        to={'/'}
                        exact={true}
                        className='link'
                        activeClassName='active'
                    >
                        {main}
                    </NavLink>
                    <NavLink
                        to={'/about'}
                        exact={true}
                        className='link'
                        activeClassName='active'
                    >
                        {about}
                    </NavLink>
                </div>

                <div className='headerTop_langs'>
                    <div className='lang' onClick={() => dispatch(setLang('ua'))}>укр</div>
                    <div className='lang' onClick={() => dispatch(setLang('ru'))}>рус</div>
                </div>
            </div>
        </div>
    );
}

export default Header;