import React from 'react';

import './navigation.scss';
import Header from '../Header';
import Footer from '../Footer';

const Navigation: React.FC = () => {
    return (
        <aside className="navigation">
            <Header/>
            <nav className="navigation__nav">
                <ul className="navigation__nav__list">
                    <li className="navigation__nav__list__item">
                        
                    </li>
                </ul>
            </nav>
            <Footer/>
        </aside>
    )
}

export default Navigation;
