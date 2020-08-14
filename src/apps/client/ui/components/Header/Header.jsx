import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <div className='headerContainer'>
        <div className='headerContentContainer'>
            <div className='headerTop_menu'>
                <NavLink
                    to={'/'}
                    exact={true}
                    className='link'
                    activeClassName='active'
                >
                    Головна
                </NavLink>
                <NavLink
                    to={'/about'}
                    exact={true}
                    className='link'
                    activeClassName='active'
                >
                    Про нас
                </NavLink>
            </div>

            <div className='headerTop_langs'>
                <div className='lang'>укр</div>
                <div className='lang'>рус</div>
            </div>
        </div>
    </div>
}

export default Header;