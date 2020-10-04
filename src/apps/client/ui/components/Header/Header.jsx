import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import headerBg from './img/header.png';
import setLang from '../../../actions/setLang';
import classNames from 'classnames';

import './Header.css';

const Header = () => {
    const langMap = useSelector(({ application }) => application.langMap);
    const lang = useSelector(({ application }) => application.lang);
    const { menu, logo } = langMap.header;
    const dispatch = useDispatch();

    return (
        <div className='headerContainer'>
            <div className='headerBackgroundWrap'>
                <img src={headerBg} alt="bg"/>
            </div>
            <div className='headerContentContainer'>
                <div className="headerLogo">
                    <div className="headerLogoWrap">
                        {logo}
                    </div>
                </div>
                <div className='headerTop'>
                    <div className='headerTop_menu'>
                        <NavLink
                            to={'/'}
                            exact={true}
                            className='link'
                            activeClassName='active'
                        >
                            {menu.main}
                        </NavLink>
                        <NavLink
                            to={'/about'}
                            exact={true}
                            className='link'
                            activeClassName='active'
                        >
                            {menu.about}
                        </NavLink>
                    </div>
                    <div className='headerTop_langs'>
                        <div 
                            className={classNames('lang', {
                                'activeLang': lang === 'ua'
                            })} 
                            onClick={() => dispatch(setLang('ua'))}
                        >
                            укр
                        </div>
                        <div
                            className={classNames('lang', {
                                'activeLang': lang === 'ru'
                            })} 
                            onClick={() => dispatch(setLang('ru'))}
                        >
                            рус
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;