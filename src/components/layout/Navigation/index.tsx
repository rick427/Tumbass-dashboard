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
                    <div className="navigation__nav__list__tile">
                        <h1>Menu</h1>
                        <li className="navigation__nav__list__tile__item active">
                            <i className="bi-grid-fill"/>
                            overview
                        </li>
                        <li className="navigation__nav__list__tile__item">
                            <i className="bi-bookmark-check-fill"/>
                            orders
                        </li>
                        <li className="navigation__nav__list__tile__item">
                            <i className="bi-basket3-fill"/>
                            products
                        </li>
                        <li className="navigation__nav__list__tile__item">
                            <i className="bi-gear-fill"/>
                            gear
                        </li>
                    </div>

                    <div className="navigation__nav__list__tile">
                        <h1>Business</h1>
                        <li className="navigation__nav__list__tile__item">
                            <i className="bi-cursor-fill"/>
                            shipment
                        </li>
                        <li className="navigation__nav__list__tile__item">
                            <i className="bi-people-fill"/>
                            employee
                        </li>
                    </div>
                </ul>
            </nav>
            <Footer/>
        </aside>
    )
}

export default Navigation;
