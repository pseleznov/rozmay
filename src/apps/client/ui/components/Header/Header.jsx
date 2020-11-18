import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import setLang from '../../../actions/setLang';
import classNames from 'classnames';
import headerBg from './img/header.png';
import footerBg from './img/footerMobile.png';
import headerMobile from './img/headerMobile.png';
import NavbarСontainer from '../../containers/NavbarСontainer/NavbarСontainer';
import FlowerDivider from '../FlowerDivider/FlowerDivider';

import './Header.css';

const Header = () => {
    const langMap = useSelector(({ application }) => application.langMap);
    const lang = useSelector(({ application }) => application.lang);
    const { menu, logo } = langMap.header;
    const dispatch = useDispatch();
    const [menuIsActive, handleBurgerClick] = useState(false);

    return (
        <div className='headerContainer'>
            <div className='headerBackgroundWrap'>
                <img className='headerBackgroundWrap_desktopImg' src={headerBg} alt="bg"/>
                <img className='headerBackgroundWrap_mobileImg' src={headerMobile} alt="bg"/>
            </div>
            <div className='headerContentContainer'>
                <div className="headerLogo">
                    <div className="headerLogoWrap">
                        {logo}
                    </div>
                </div>
                <div className='headerTop'>
                    <div 
                        onClick={() => handleBurgerClick(!menuIsActive)}
                        className={classNames('headerTop_burger', {
                            'headerTop_burger_active': menuIsActive
                        })}
                    >
                        <div className='headerTop_burgerLine'>
                            <span />
                        </div>
                    </div>
                    <div className={classNames('headerTop_menu', {
                        'headerTop_menu_active': menuIsActive
                    })}>
                        <NavLink
                            to={'/'}
                            exact={true}
                            className='link'
                            activeClassName='active'
                            onClick={() => handleBurgerClick(!menuIsActive)}
                        >
                            {menu.main}
                        </NavLink>
                        <NavLink
                            to={'/about'}
                            exact={true}
                            className='link'
                            activeClassName='active'
                            onClick={() => handleBurgerClick(!menuIsActive)}
                        >
                            {menu.about}
                        </NavLink>
                        <div className='headerTop_menu_mobileNavbar'>
                            <FlowerDivider />
                            <NavbarСontainer 
                                handleBurgerClick={handleBurgerClick}
                                menuIsActive={menuIsActive}
                            />
                            <div className='headerTop_menu_footerBg'>
                                <img src={footerBg} alt="footer"/>
                            </div>
                        </div>
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