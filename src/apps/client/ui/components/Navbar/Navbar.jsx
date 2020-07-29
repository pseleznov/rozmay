import React, { useState } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css'

const subtitles = {
    girls: [
        { title: 'Блузки', link: '/' },
        { title: 'Плаття', link: '/' },
        { title: 'Спіднички', link: '/' }
    ],
    boys: [
        { title: 'Сорочки', link: '/' },
        { title: 'Шаровари', link: '/' },
    ]
};

const Navbar = () => {
    const [showGirlsSubItems, handleGirlsClick] = useState(false);
    const [showBoysSubItems, handleBoysClick] = useState(false);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Чоловічі сорочки
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Жіночі блузки
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Жіночі сукні
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
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
                                    exact to={'/'}
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
                                    exact to={'/'}
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
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Сценічний одяг
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Спортивні костюми
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Оформлення сцен
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    exact to={'/'}
                    activeClassName={styles.active}
                >
                    Дрібнички і не тільки
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;