import React, { useState } from 'react';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css'

const subtitles = {
    girls: [
        { title: 'Блузки', link: '/clothes-for-girls-blouses' },
        { title: 'Плаття', link: '/clothes-for-girls-dresses' },
        { title: 'Спіднички', link: '/clothes-for-girls-skirts' }
    ],
    boys: [
        { title: 'Сорочки', link: '/clothes-for-boys-shirt' },
        { title: 'Шаровари', link: '/clothes-for-boys-trousers' },
    ]
};

const Navbar = () => {
    const [showGirlsSubItems, handleGirlsClick] = useState(false);
    const [showBoysSubItems, handleBoysClick] = useState(false);

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/mens-shirt'}
                    activeClassName={styles.active}
                >
                    Чоловічі сорочки
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/womens-blouses'}
                    activeClassName={styles.active}
                >
                    Жіночі блузки
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/womens-dresses'}
                    activeClassName={styles.active}
                >
                    Жіночі сукні
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/paired-suits'}
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
                    to={'/stage-clothes'}
                    activeClassName={styles.active}
                >
                    Сценічний одяг
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/tracksuits'}
                    activeClassName={styles.active}
                >
                    Спортивні костюми
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/scene-design'}
                    activeClassName={styles.active}
                >
                    Оформлення сцен
                </NavLink>
            </div>
            <div className={styles.navbarItem}>
                <NavLink
                    to={'/trifles'}
                    activeClassName={styles.active}
                >
                    Дрібнички і не тільки
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;