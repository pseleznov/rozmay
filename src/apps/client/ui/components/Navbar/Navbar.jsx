import React from 'react'

import NavbarItem from '../NavbarItem/NavbarItem';

import styles from './Navbar.module.css'

const Navbar = () => {
    return <div className={styles.navbarContainer}>
        <NavbarItem title='Вишиванки' subTitles={['Такі', 'Сякі']} />
        <NavbarItem title='Шортики' subTitles={['маленькі', 'великі']} />
    </div>
}

export default Navbar;