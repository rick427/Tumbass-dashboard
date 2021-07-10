import React from 'react';

import './header.scss';
import logo from '../../../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <header className="header">
            <figure className="header__logo">
                <img src={logo} alt="logo"/>
            </figure>

            <h1 className="header__title">Tumbas</h1>
        </header>
    )
}

export default Header;
