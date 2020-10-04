import React, { Component } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import arrow from './img/arrow.png';

import styles from './Navbar.module.css';

const navbar = [
    { title: 'Чоловічі сорочки', link: '/products/men-shirt' },
    { title: 'Жіночі блузки', link: '/products/women-blouses' },
    { title: 'Жіночі сукні', link: '/products/women-dresses' },
    { title: 'Парні вишиванки', link: '/products/paired-suits' },
    {
        isGroup: true,
        name: 'Одяг для дівчаток',
        group: [
            { title: 'Блузки', link: '/products/clothes-for-girls-blouses' },
            { title: 'Плаття', link: '/products/clothes-for-girls-dresses' },
            { title: 'Спіднички', link: '/products/clothes-for-girls-skirts' }
        ]
    },
    {
        isGroup: true,
        name: 'Одяг для хлопчиків',
        group: [
            { title: 'Сорочки', link: '/products/clothes-for-boys-shirt' },
            { title: 'Шаровари', link: '/products/clothes-for-boys-trousers' }
        ]
    },
    { title: 'Сценічний одяг', link: '/products/stage-clothes' },
    { title: 'Спортивні костюми', link: '/products/tracksuits' },
    { title: 'Оформлення сцен', link: '/products/scene-design' },
    { title: 'Дрібнички і не тільки', link: '/products/trifles' }
];

class Navbar extends Component {

    state = {}

    handleClick = (groupName) => () => {
        this.setState({
            [groupName]: !this.state[groupName]
        });
    }

    render() {
        return (
            <div className={styles.navbarContainer}>
                <div className={styles.contentContainer}>
                    <div className={styles.title}>КАТАЛОГ</div>
                    <div className={styles.navbarItems}>
                        {
                            navbar.map((item, i) => {
                                if (item.isGroup) {
                                    return (
                                        <div className={classNames(styles.navbarItem, styles.group)} key={i}>
                                            <div className={styles.groupTitle} onClick={this.handleClick(item.name)}>
                                                <span>{item.name}</span>
                                                <div className={styles.groupArrow}>
                                                    <img
                                                        className={classNames({
                                                            [styles.arrowUp]: this.state[item.name]
                                                        })} 
                                                        src={arrow} 
                                                        alt="arrow"
                                                    />
                                                </div> 
                                            </div>
                                            <div className={classNames(styles.itemContent, {
                                                [styles.disable]: !this.state[item.name]
                                            })}>
                                                {item.group.map((item, i) => {
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
                                    ) 
                                } else {
                                    return (
                                        <div className={styles.navbarItem} key={i}>
                                            <NavLink
                                                to={`${item.link}`}
                                                activeClassName={styles.active}
                                            >
                                                {item.title}
                                            </NavLink>
                                        </div>
                                    );
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;