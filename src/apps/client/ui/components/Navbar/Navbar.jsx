import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import arrow from './img/arrow.png';

import styles from './Navbar.module.css';

const Navbar = ({ navbar, navbarTitle, handleClick, state }) => {
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.title}>{navbarTitle}</div>
                <div className={styles.navbarItems}>
                    {
                        navbar.map((item, i) => {
                            if (item.isGroup) {
                                return (
                                    <div className={classNames(styles.navbarItem, styles.group)} key={i}>
                                        <div className={styles.groupTitle} onClick={handleClick(item.name)}>
                                            <span>{item.name}</span>
                                            <div className={styles.groupArrow}>
                                                <img
                                                    className={classNames({
                                                        [styles.arrowUp]: state[item.name]
                                                    })} 
                                                    src={arrow} 
                                                    alt="arrow"
                                                />
                                            </div> 
                                        </div>
                                        <div className={classNames(styles.itemContent, {
                                            [styles.disable]: !state[item.name]
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
};

export default (Navbar);