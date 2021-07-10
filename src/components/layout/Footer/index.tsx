import React from 'react';

import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <h3 className="footer__title">
                &copy; Tumbas. {new Date().getFullYear()}
            </h3>
            <p className="footer__text">
                Platform for solution of all types of business to be more advanced.
            </p>
        </footer>
    )
}

export default Footer;
