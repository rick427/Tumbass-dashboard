import React from 'react';

import './layout.scss';
import Navigation from '../Navigation';

const Layout: React.FC = ({children}) => {
    return (
        <section className="layout">
            <Navigation/>

            <main className="layout__content">
                {children}
            </main>
        </section>
    )
}

export default Layout;
