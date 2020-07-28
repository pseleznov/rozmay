import React from 'react'

import NavbarItem from '../NavbarItem/NavbarItem';

import styles from './Navbar.module.css'

const NAVBAR = {
    ua: [
        {
            title: 'Чоловічі сорочки',
            subtitle: []
        },
        {
            title: 'Жіночі блузки',
            subtitle: []
        },
        {
            title: 'Жіночі сукні',
            subtitle: []
        },
        {
            title: 'Жіночі сукні',
            subtitle: []
        },
        {
            title: 'Парні костюми',
            subtitle: []
        },
        {
            title: 'Для дівчаток',
            subtitle: [
                'Блузки',
                'Плаття',
                'Спіднички'
            ]
        },
        {
            title: 'Для хлопчиків',
            subtitle: [
                'Сорочки',
                'Шаровари'
            ]
        },
        {
            title: 'Сценічний одяг',
            subtitle: []
        },
        {
            title: 'Спортивні костюми',
            subtitle: []
        },
        {
            title: 'Оформлення сцен',
            subtitle: []
        },
        {
            title: 'Дрібнички і не тільки',
            subtitle: []
        }
    ]
};

const Navbar = () => {
    return <div className={styles.navbarContainer}>
        {NAVBAR.ua.map((item, i) => {
            return (
                <NavbarItem
                    title={item.title}
                    subTitles={item.subtitle}
                    key={i}
                />
            );
        })}
    </div>
}

export default Navbar;