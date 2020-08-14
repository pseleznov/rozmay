import React, { useState } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css'

const subtitles = {
    girls: [
        { title: 'Блузки', link: '/products/clothes-for-girls-blouses' },
        { title: 'Плаття', link: '/products/clothes-for-girls-dresses' },
        { title: 'Спіднички', link: '/products/clothes-for-girls-skirts' }
    ],
    boys: [
        { title: 'Сорочки', link: '/products/clothes-for-boys-shirt' },
        { title: 'Шаровари', link: '/products/clothes-for-boys-trousers' },
    ]
};

const Navbar = () => {
    const [showGirlsSubItems, handleGirlsClick] = useState(false);
    const [showBoysSubItems, handleBoysClick] = useState(false);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.title}>КАТАЛОГ</div>
                <div className={styles.navbarItems}>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/men-shirt'}
                            activeClassName={styles.active}
                        >
                            Чоловічі сорочки
                        </NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/women-blouses'}
                            activeClassName={styles.active}
                        >
                            Жіночі блузки
                        </NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/women-dresses'}
                            activeClassName={styles.active}
                        >
                            Жіночі сукні
                        </NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/paired-suits'}
                            activeClassName={styles.active}
                        >
                            Парні костюми
                        </NavLink>
                    </div>
                    <div className={classNames(styles.navbarItem, styles.group)} onClick={() => handleGirlsClick(!showGirlsSubItems)}>
                        Одяг для дівчаток
                <div className={classNames(styles.itemContent, {
                        [styles.disable]: !showGirlsSubItems
                    })}>
                            {subtitles.girls.map((item, i) => {
                                return (
                                    <div
                                        className={styles.subItem}
                                        key={i}
                                    >
                                        <NavLink
                                            to={item.link}
                                            activeClassName={styles.active}
                                        >
                                            {item.title}
                                                </NavLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={classNames(styles.navbarItem, styles.group)} onClick={() => handleBoysClick(!showBoysSubItems)}>
                        Одяг для хлопчиків
                <div className={classNames(styles.itemContent, {
                        [styles.disable]: !showBoysSubItems
                    })}>
                            {subtitles.boys.map((item, i) => {
                                return (
                                    <div
                                        className={styles.subItem}
                                        key={i}
                                    >
                                        <NavLink
                                            to={item.link}
                                            activeClassName={styles.active}
                                        >
                                            {item.title}
                                                </NavLink>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/stage-clothes'}
                            activeClassName={styles.active}
                        >
                            Сценічний одяг
                        </NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/tracksuits'}
                            activeClassName={styles.active}
                        >
                            Спортивні костюми
                        </NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/scene-design'}
                            activeClassName={styles.active}
                        >
                            Оформлення сцен
                        </NavLink>
                    </div>
                    <div className={styles.navbarItem}>
                        <NavLink
                            to={'/products/trifles'}
                            activeClassName={styles.active}
                        >
                            Дрібнички і не тільки
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;