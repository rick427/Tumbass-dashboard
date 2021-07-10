import React from 'react';

import './navigation.scss';
import Header from '../Header';
import Footer from '../Footer';

const Navigation: React.FC = () => {
    return (
        <aside className="navigation">
            <Header/>
            <nav className="navigation__nav">
                NAVIGATION LIST!
            </nav>
            <Footer/>
        </aside>
    )
}

export default Navigation;
