import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './NavbarItem.module.css'

const NavbarItem = (props) => {

    const [hasSubItems, handleClick] = useState(false);

    console.log(hasSubItems)

    return <div>
        <div className={styles.navbarItem} onClick={() => handleClick(!hasSubItems)}>
            {props.title}
        </div>
        <div className={classNames(styles.itemContent, {
            [styles.disable]: hasSubItems
        })}>
            {props.subTitles.map(item => {
                return <div className={styles.subItem}>{item}</div>
            })}
        </div>
    </div>
}

export default NavbarItem;